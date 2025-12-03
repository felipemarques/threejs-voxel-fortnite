// Authoritative WebSocket server for multiplayer with server-side hit detection
// Run with: npm run server
import { WebSocketServer } from 'ws';
import { randomUUID } from 'crypto';
import * as THREE from 'three';

const PORT = process.env.PORT || 3001;
const wss = new WebSocketServer({ port: PORT });

const clients = new Map(); // id -> { ws, room }
const rooms = new Map();   // roomCode -> RoomState

// ============================================================================
// AUTHORITATIVE STATE CLASSES
// ============================================================================

class PlayerState {
  constructor(id, position = { x: 0, y: 0, z: 0 }) {
    this.id = id;
    this.nick = 'Unknown'; // Store player nickname
    this.position = new THREE.Vector3(position.x, position.y, position.z);
    this.rotation = 0;
    this.velocity = new THREE.Vector3();
    this.health = 100;
    this.shield = 100;
    this.currentWeapon = 'Pistol';
    this.ammo = { Pistol: 100, Rifle: 100, Sniper: 20 };
    this.lastShotTime = 0;
    this.magazineCounts = { Pistol: 12, Rifle: 30, Sniper: 5 };
  }

  canShoot(weaponName, currentTime) {
    const cooldowns = { Pistol: 0.2, Rifle: 0.1, Sniper: 1.5, Fist: 0.5 };
    const cooldown = cooldowns[weaponName] || 0.2;
    if (currentTime - this.lastShotTime < cooldown) return false;
    if (weaponName === 'Fist') return true; // Melee has no ammo
    if ((this.magazineCounts[weaponName] || 0) <= 0) return false;
    return true;
  }

  consumeAmmo(weaponName) {
    return; // Infinite ammo for testing
    // if (weaponName !== 'Fist' && this.magazineCounts[weaponName]) {
    //   this.magazineCounts[weaponName]--;
    // }
    // this.lastShotTime = Date.now() / 1000;
  }

  takeDamage(amount) {
    if (this.shield > 0) {
      const shieldDamage = Math.min(this.shield, amount);
      this.shield -= shieldDamage;
      amount -= shieldDamage;
    }
    this.health = Math.max(1, this.health - amount); // Min health 1 to prevent death
    return false; // Never die for testing
    // return this.health <= 0; // returns true if dead
  }
}

class PositionHistory {
  constructor(maxDuration = 1000) { // 1 second history
    this.buffer = []; // [{timestamp, position, rotation}, ...]
    this.maxDuration = maxDuration;
  }

  record(timestamp, position, rotation) {
    this.buffer.push({
      timestamp,
      position: position.clone(),
      rotation
    });
    // Clean old entries
    const cutoff = timestamp - this.maxDuration;
    while (this.buffer.length > 0 && this.buffer[0].timestamp < cutoff) {
      this.buffer.shift();
    }
  }

  getStateAt(timestamp) {
    if (this.buffer.length === 0) return null;
    
    // Find closest snapshot (simple approach; could use interpolation)
    let closest = this.buffer[0];
    let minDiff = Math.abs(this.buffer[0].timestamp - timestamp);
    
    for (const snapshot of this.buffer) {
      const diff = Math.abs(snapshot.timestamp - timestamp);
      if (diff < minDiff) {
        minDiff = diff;
        closest = snapshot;
      }
    }
    
    return closest;
  }
}

// ============================================================================
// SERVER-SIDE HIT DETECTION
// ============================================================================

// Optional: Enable lag compensation (rewinds positions to account for network latency)
// Disable for simpler debugging, enable for competitive play
const LAG_COMPENSATION_ENABLED = false; // Set to true for production
const DEBUG_STATIC_TEST = false; // Force players to face each other, disable movement

// Helper to determine body region from hit height (relative to feet)
function getBodyRegion(hitY, playerY) {
  const relativeY = hitY - playerY;
  if (relativeY > 1.4) return 'HEAD';
  if (relativeY > 1.0) return 'CHEST';
  if (relativeY > 0.6) return 'STOMACH';
  return 'LEGS';
}

function processShoot(shooterId, roomCode, data) {
  const room = rooms.get(roomCode);
  if (!room || !room.matchActive) return;
  
  const shooter = room.playerStates.get(shooterId);
  if (!shooter) return;
  
  const weaponName = data.weapon || 'Pistol';
  const now = Date.now() / 1000;
  
  // Validate rate of fire and ammo
  if (!shooter.canShoot(weaponName, now)) {
    console.warn(`[ANTI-CHEAT] ${shooterId} ROF/ammo violation for ${weaponName}`);
    return;
  }
  
  // Determine target positions (with or without lag compensation)
  const targetStates = new Map();
  
  if (LAG_COMPENSATION_ENABLED) {
    // Lag compensation: rewind to shooter's timestamp
    const shootTimestamp = data.timestamp || Date.now();
    for (const [id, history] of room.positionHistory) {
      if (id === shooterId) continue;
      const state = history.getStateAt(shootTimestamp);
      if (state) targetStates.set(id, state);
    }
  } else {
    // Simple: use current positions
    for (const [id, pState] of room.playerStates) {
      if (id === shooterId) continue;
      targetStates.set(id, { position: pState.position, rotation: pState.rotation });
    }
  }
  
  // Log Room State at moment of shot
  console.log(`\n[SHOOT EVENT] Shooter: ${shooter.nick} (${shooterId.substring(0,8)})`);
  console.log(`[ROOM STATE] Players in room: ${room.playerStates.size}`);
  room.playerStates.forEach((p, pid) => {
      if (pid !== shooterId) {
          console.log(` - Target: ${p.nick} (${pid.substring(0,8)}) at (${p.position.x.toFixed(1)}, ${p.position.y.toFixed(1)}, ${p.position.z.toFixed(1)})`);
      }
  });

  // Perform raycast
  // Use client-provided origin if available (TPS camera), otherwise use player eye level
  let shooterPos;
  if (data.origin) {
    shooterPos = new THREE.Vector3(data.origin.x, data.origin.y, data.origin.z);
    console.log(`[RAYCAST] Using client origin: (${shooterPos.x.toFixed(2)}, ${shooterPos.y.toFixed(2)}, ${shooterPos.z.toFixed(2)})`);
  } else {
    shooterPos = new THREE.Vector3(shooter.position.x, shooter.position.y + 1.6, shooter.position.z);
    console.log(`[RAYCAST] Using player eye level: (${shooterPos.x.toFixed(2)}, ${shooterPos.y.toFixed(2)}, ${shooterPos.z.toFixed(2)})`);
  }
  
  const direction = new THREE.Vector3(data.direction.x, data.direction.y, data.direction.z).normalize();
  const raycaster = new THREE.Raycaster(shooterPos, direction);
  
  // DEBUG LOG: Shooter info
  console.log(`[SHOOT] ${shooterId.substring(0,8)} fired ${weaponName} from (${shooterPos.x.toFixed(1)}, ${shooterPos.y.toFixed(1)}, ${shooterPos.z.toFixed(1)}) dir:(${direction.x.toFixed(2)}, ${direction.y.toFixed(2)}, ${direction.z.toFixed(2)})`);
  
  // Find closest hit
  let closestHit = null;
  let closestDist = Infinity;
  
  for (const [targetId, targetState] of targetStates) {
    const target = room.playerStates.get(targetId);
    if (!target || target.health <= 0) continue;
    
    // Two-sphere hitbox system: HEAD (priority) and BODY
    
    // 1. HEAD HITBOX - Smaller sphere at eye level (Y=1.6)
    const headCenter = targetState.position.clone().add(new THREE.Vector3(0, 1.6, 0));
    const headSphere = new THREE.Sphere(headCenter, 0.35); // Smaller radius for head
    const headIntersect = new THREE.Vector3();
    
    // 2. BODY HITBOX - Larger sphere at torso (Y=0.9)  
    const bodyCenter = targetState.position.clone().add(new THREE.Vector3(0, 0.9, 0));
    const bodySphere = new THREE.Sphere(bodyCenter, 0.8);
    const bodyIntersect = new THREE.Vector3();
    
    let hitPoint = null;
    let isHeadshot = false;
    
    // Check head first (priority)
    if (raycaster.ray.intersectSphere(headSphere, headIntersect)) {
      hitPoint = headIntersect;
      isHeadshot = true;
    } 
    // If no headshot, check body
    else if (raycaster.ray.intersectSphere(bodySphere, bodyIntersect)) {
      hitPoint = bodyIntersect;
      isHeadshot = false;
    }
    
    if (hitPoint) {
      const dist = shooterPos.distanceTo(hitPoint);
      console.log(`[RAYCAST] Target ${targetId.substring(0,8)} at (${targetState.position.x.toFixed(1)}, ${targetState.position.y.toFixed(1)}, ${targetState.position.z.toFixed(1)})`);
      console.log(`[RAYCAST] ${isHeadshot ? 'HEAD' : 'BODY'} hit at (${hitPoint.x.toFixed(2)}, ${hitPoint.y.toFixed(2)}, ${hitPoint.z.toFixed(2)}) dist: ${dist.toFixed(2)}m`);
      
      if (dist < closestDist) {
        closestDist = dist;
        closestHit = {
          targetId,
          point: hitPoint,
          distance: dist,
          isHeadshot: isHeadshot
        };
      }
    }
  }
  
  // Calculate damage with headshot multipliers
  if (closestHit) {
    const target = room.playerStates.get(closestHit.targetId);
    if (!target) return;
    
    // Base damage by weapon
    const weaponDamage = {
      'Pistol': 25,
      'Rifle': 25,
      'Shotgun': 60,
      'Sniper': 75
    };
    
    let baseDmg = weaponDamage[weaponName] || 25;
    let damage = baseDmg;
    let region = 'BODY';
    
    // Headshot logic
    if (closestHit.isHeadshot) {
      region = 'HEAD';
      
      // Instakill weapons on headshot
      if (weaponName === 'Sniper') {
        damage = 999; // Instakill
      } else if (weaponName === 'Shotgun' && closestHit.distance < 10) {
        damage = 999; // Instakill if close range
      } else if (weaponName === 'Rifle') {
        damage = baseDmg * 2; // 2x multiplier = 50 dmg
      } else if (weaponName === 'Pistol') {
        damage = baseDmg * 2; // 2x multiplier = 50 dmg (increased from 1.6x)
      } else {
        // Default: 2x multiplier for other weapons
        damage = baseDmg * 2;
      }
      
      // Ensure minimum 50 damage on headshot
      if (damage < 50 && damage !== 999) {
        damage = 50;
      }
      
      console.log(`[HEADSHOT] ${weaponName} dealt ${damage} damage (base: ${baseDmg})`);
    } else {
      // Body regions based on Y height
      if (closestHit.point.y > target.position.y + 1.2) {
        region = 'CHEST';
      } else if (closestHit.point.y > target.position.y + 0.6) {
        region = 'STOMACH';
      } else {
        region = 'LEGS';
      }
    }
    
    // Apply damage
    const prevHealth = target.health;
    const prevShield = target.shield;
    const isDead = target.takeDamage(damage);
    
    shooter.consumeAmmo(weaponName);
    
    // DEBUG LOG: Hit details
    console.log(`[HIT] ${shooterId.substring(0,8)} -> ${closestHit.targetId.substring(0,8)} (${weaponName}: ${damage} dmg, dist: ${closestDist.toFixed(2)}m)`);
    console.log(`  Target pos: (${targetStates.get(closestHit.targetId).position.x.toFixed(1)}, ${targetStates.get(closestHit.targetId).position.y.toFixed(1)}, ${targetStates.get(closestHit.targetId).position.z.toFixed(1)})`);
    console.log(`  Hit point: (${closestHit.point.x.toFixed(1)}, ${closestHit.point.y.toFixed(1)}, ${closestHit.point.z.toFixed(1)})`);
    console.log(`  Health: ${prevHealth.toFixed(0)} -> ${target.health.toFixed(0)} | Shield: ${prevShield.toFixed(0)} -> ${target.shield.toFixed(0)} ${isDead ? '[DEAD]' : ''}`);
    
    // Broadcast hit confirmation to all clients
    broadcastToRoom(roomCode, {
      type: 'hit-confirm',
      shooterId,
      targetId: closestHit.targetId,
      damage,
      position: {
        x: closestHit.point.x,
        y: closestHit.point.y,
        z: closestHit.point.z
      },
      isDead,
      weapon: weaponName,
      hitPoint: { x: closestHit.point.x, y: closestHit.point.y, z: closestHit.point.z },
      direction: data.direction,
      region: region // Use the region calculated above (HEAD, CHEST, STOMACH, LEGS)
    });
    
    if (isDead) {
      broadcastToRoom(roomCode, { type: 'player-dead', id: closestHit.targetId });
    }
  } else {
    // Miss - log for debugging
    console.log(`[MISS] ${shooterId.substring(0,8)} (${weaponName})`);
  }
}

// ============================================================================
// ROOM MANAGEMENT
// ============================================================================

function broadcastToRoom(roomCode, data) {
  const room = rooms.get(roomCode);
  if (!room) return;
  const msg = JSON.stringify(data);
  for (const id of room.clients) {
    const entry = clients.get(id);
    if (entry && entry.ws.readyState === entry.ws.OPEN) {
      try { entry.ws.send(msg); } catch (e) {}
    }
  }
}

function logRoom(roomCode, extra = '') {
  const room = rooms.get(roomCode);
  const count = room ? room.clients.size : 0;
  const host = room ? room.hostId : 'none';
  const settings = room && room.settings ? JSON.stringify(room.settings) : 'no-settings';
  const start = room && room.lastStart ? new Date(room.lastStart).toISOString() : 'n/a';
  console.log(`[MP][room:${roomCode}] players=${count} host=${host} started=${start} settings=${settings}${extra ? ' ' + extra : ''}`);
}

// ============================================================================
// WEBSOCKET HANDLERS
// ============================================================================

wss.on('connection', (ws) => {
  const id = randomUUID();
  clients.set(id, { ws, room: null });
  console.log(`[MP] Client connected ${id}. Active: ${clients.size}`);
  ws.send(JSON.stringify({ type: 'hello', id }));

  ws.on('message', (msg) => {
    try {
      const data = JSON.parse(msg.toString());
      const entry = clients.get(id);
      if (!entry) return;

      // Ping/pong for latency measurement
      if (data.type === 'ping' && typeof data.ts === 'number') {
        try { ws.send(JSON.stringify({ type: 'pong', ts: data.ts })); } catch (e) {}
        return;
      }

      // Join room
      if (data.type === 'join' && data.room) {
        // Leave previous room if any
        if (entry.room && rooms.has(entry.room)) {
          const prev = rooms.get(entry.room);
          prev.clients.delete(id);
          prev.playerStates.delete(id);
          prev.positionHistory.delete(id);
          broadcastToRoom(entry.room, { type: 'player-leave', id });
        }
        entry.room = data.room;
        let room = rooms.get(data.room);
        if (!room) {
          room = {
            clients: new Set(),
            hostId: id,
            countdown: null,
            settings: null,
            lastStart: 0,
            playerStates: new Map(),
            positionHistory: new Map(),
            matchActive: false
          };
          rooms.set(data.room, room);
        }
        room.clients.add(id);
        
        // Initialize player state
        room.playerStates.set(id, new PlayerState(id, data.pos || { x: 0, y: 0, z: 0 }));
        room.positionHistory.set(id, new PositionHistory());
        
        // If host left previously, set first client as host
        if (!room.hostId || !room.clients.has(room.hostId)) {
          room.hostId = id;
        }
        ws.send(JSON.stringify({
          type: 'welcome',
          id,
          room: data.room,
          isHost: room.hostId === id,
          settings: room.settings || null,
          custom: data.custom || null
        }));
        broadcastToRoom(data.room, { type: 'player-join', id, custom: data.custom || null });
        logRoom(data.room, '[join]');
      }

      if (!entry.room) return; // ignore until joined
      const room = rooms.get(entry.room);
      if (!room) return;

      // State updates (position, rotation, animations)
      if (data.type === 'state' && data.pos) {
        let pState = room.playerStates.get(id);
        if (!pState) {
          // DEBUG: Fixed spawn positions
          if (DEBUG_STATIC_TEST) {
            console.log(`[SPAWN DEBUG] Player ${id.substring(0,8)} joining. CustomSpawn:`, data.customSpawn);
            
            // Check for client-requested spawn
            if (data.customSpawn) {
                data.pos = data.customSpawn;
                console.log(`[SPAWN DEBUG] Using custom spawn: (${data.pos.x}, ${data.pos.y}, ${data.pos.z})`);
            } else {
                const count = room.playerStates.size;
                if (count === 0) {
                    // Player 1: North side, facing South (Z+)
                    data.pos = { x: 0, y: 0, z: -5 };
                    data.rot = Math.PI; // Face South
                } else if (count === 1) {
                    // Player 2: South side, facing North (Z-)
                    data.pos = { x: 0, y: 0, z: 5 };
                    data.rot = 0; // Face North
                }
                console.log(`[SPAWN DEBUG] Using default spawn: (${data.pos.x}, ${data.pos.y}, ${data.pos.z})`);
            }
          }
          console.log(`[SPAWN DEBUG] Creating PlayerState with position: (${data.pos.x}, ${data.pos.y}, ${data.pos.z})`);
          pState = new PlayerState(id, data.pos);
          room.playerStates.set(id, pState);
        }
        
        // Update nickname if provided
        if (data.nick) pState.nick = data.nick;

        // Always update position and rotation (removed DEBUG_STATIC_TEST lock)
        // Client-side movement lock is sufficient for testing
        pState.position.set(data.pos.x, data.pos.y, data.pos.z);
        pState.rotation = data.rot || 0;

        
        // Record to history for lag compensation
        let history = room.positionHistory.get(id);
        if (!history) {
          history = new PositionHistory();
          room.positionHistory.set(id, history);
        }
        history.record(data.ts || Date.now(), pState.position, pState.rotation);
        
        // Relay to other clients
        broadcastToRoom(entry.room, {
          type: 'state',
          id,
          pos: data.pos,
          rot: data.rot,
          fwd: data.fwd,
          nick: data.nick,
          color: data.color,
          anim: data.anim,
          custom: data.custom || null,
          ts: data.ts
        });
      }
      // NEW: Server-side shoot processing
      else if (data.type === 'shoot' && data.direction) {
        processShoot(id, entry.room, data);
      }
      // Zombie hit/state (existing logic)
      else if (data.type === 'zombie-hit' && data.id && typeof data.amount === 'number') {
        broadcastToRoom(entry.room, { type: 'zombie-hit', id: data.id, amount: data.amount, from: id });
      } else if (data.type === 'zombie-state' && data.id && typeof data.health === 'number') {
        broadcastToRoom(entry.room, { type: 'zombie-state', id: data.id, health: data.health, from: id });
      }
      // OLD 'hit' message - now ignored (clients should send 'shoot' instead)
      else if (data.type === 'hit') {
        console.warn(`[DEPRECATED] Client ${id} sent old 'hit' message, ignoring`);
      }
      // Match start/settings
      else if (data.type === 'start' && room.hostId === id) {
        if (room.countdown) clearTimeout(room.countdown);
        broadcastToRoom(entry.room, { type: 'start-countdown', duration: 10 });
        room.countdown = setTimeout(() => {
          room.lastStart = Date.now();
          room.matchActive = true;
          broadcastToRoom(entry.room, { type: 'match-start' });
          room.countdown = null;
          logRoom(entry.room, '[match-start]');
        }, 10000);
      } else if (data.type === 'settings' && room.hostId === id && data.settings) {
        room.settings = data.settings;
        broadcastToRoom(entry.room, { type: 'settings', settings: room.settings, hostId: room.hostId });
        logRoom(entry.room, '[settings-update]');
      } else if (data.type === 'player-dead' && data.id) {
        broadcastToRoom(entry.room, { type: 'player-dead', id: data.id });
      }
    } catch (e) {
      console.error('[ERROR] Message parse failed:', e);
    }
  });

  ws.on('close', () => {
    const entry = clients.get(id);
    if (entry && entry.room && rooms.has(entry.room)) {
      const room = rooms.get(entry.room);
      room.clients.delete(id);
      room.playerStates.delete(id);
      room.positionHistory.delete(id);
      broadcastToRoom(entry.room, { type: 'player-leave', id });
      // Reassign host if needed
      if (room.hostId === id) {
        const next = room.clients.values().next().value;
        room.hostId = next || null;
        if (next) {
          broadcastToRoom(entry.room, { type: 'host-changed', hostId: next });
        }
      }
      if (room.clients.size === 0) {
        rooms.delete(entry.room);
        console.log(`[MP][room:${entry.room}] closed (empty)`);
      } else {
        logRoom(entry.room, '[leave]');
      }
    }
    clients.delete(id);
    console.log(`[MP] Client disconnected ${id}. Active: ${clients.size}`);
  });
});

console.log(`✅ Authoritative multiplayer server listening on ws://localhost:${PORT}`);
console.log(`📡 Server-side hit detection enabled`);
console.log(`🛡️  Anti-cheat: ROF validation, ammo tracking, lag compensation`);

