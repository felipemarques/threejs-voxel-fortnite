import * as THREE from 'three';
import defeatSfx from './assets/mixkit-player-losing-or-failing.ogg';
import victorySfx from './assets/game-level-completed-envato-mixkit.co.ogg';
export class HUD {
    constructor(player, world, settings) {
        this.player = player;
        this.world = world;
        this.settings = settings || {};
        
        // Elements
        this.healthBar = document.getElementById('health-bar');
        this.healthText = document.getElementById('health-text');
        this.shieldBar = document.getElementById('shield-bar');
        this.shieldText = document.getElementById('shield-text');
        this.staminaBar = document.getElementById('stamina-bar');
        this.staminaText = document.getElementById('stamina-text');
        this.weaponName = document.getElementById('weapon-name');
        this.ammoCount = document.getElementById('ammo-count');
        this.slots = document.querySelectorAll('.slot');
        this.timerValue = document.getElementById('timer-value');
        // Debug container for per‑object labels
        this.debugContainer = document.getElementById('debug-container');
        this.gameOverScreen = document.getElementById('game-over-screen');
        this.selectionInfo = document.getElementById('selection-info');
        this.selectionInfoTimeout = null;
        this.hotbar = document.getElementById('hotbar');
        
        // Dashboard Elements
        this.fpsCounter = document.getElementById('fps-counter');
        this.enemyCount = document.getElementById('enemy-count');
        this.killCount = document.getElementById('kill-count');
        this.dropCount = document.getElementById('drop-count');
        this.distanceTraveled = document.getElementById('distance-traveled');
        this.playerSpeed = document.getElementById('player-speed');
        this.mapSizeText = document.getElementById('map-size-readout');
        this.memoryUsage = document.getElementById('memory-usage'); // legacy, optional
        this.targetInspect = document.getElementById('target-inspect');
        // Perf dashboard elements
        this.perfFrame = document.getElementById('perf-frame');
        this.perfCalls = document.getElementById('perf-calls');
        this.perfTris = document.getElementById('perf-tris');
        this.perfGeoms = document.getElementById('perf-geoms');
        this.perfTextures = document.getElementById('perf-textures');
        this.perfPrograms = document.getElementById('perf-programs');
        this.perfObjects = document.getElementById('perf-objects');
        this.perfMem = document.getElementById('perf-mem');
        this.perfCpu = document.getElementById('perf-cpu');
        this.perfGpu = document.getElementById('perf-gpu');
        this.perfGpuMem = document.getElementById('perf-gpu-mem');
        // References to DOM elements
        this.dashboardEl = document.getElementById('dashboard');
        this.perfDashboardEl = document.getElementById('perf-dashboard');
        this.debugEnabled = false; // Track if debug mode is enabled
        this.netStatsText = document.getElementById('net-stats');
        this.netChart = document.getElementById('net-chart');
        this.netChartCtx = this.netChart ? this.netChart.getContext('2d') : null;
        this._renderer = null;
        this.frameTimeAvg = 0;
        this.gpuInfo = null;
        this.gpuMemInfo = null;
        this._gl = null;

        // Debug Elements
        this.debugInfo = document.getElementById('debug-info');
        this.debugName = document.getElementById('debug-target-name');
        this.debugId = document.getElementById('debug-target-id');
        this.debugClearBtn = document.getElementById('debug-clear-btn');
        
        this.debugEnabled = false; // Track if debug mode is enabled
        
        this.hoveredEnemy = null;
        
        // Performance optimization variables
        this.lastRaycastTime = 0;
        this.raycastInterval = 150; // ms - throttle raycasts to run every 150ms
        this.cachedEnemyMeshes = [];
        this.enemyMeshCacheTime = 0;
        this.enemyMeshCacheDuration = 500; // ms - recache enemy meshes every 500ms
        this.lastHoverInfoText = '';
        this.lastWeaponName = '';
        this.lastAmmoText = '';

        if (this.settings.debugMode) {
            this.debugInfo.style.display = 'block';
            this.debugEnabled = true; // Enable debug mode
        } else {
            this.debugInfo.style.display = 'none';
            this.debugEnabled = false; // Disable debug mode
        }

        // Storm Timer
        this.timeRemaining = 30; // seconds
        this.lastTime = performance.now();
        this.frames = 0; // Used for FPS calculation
        this.fps = 0;
        this.lastFpsTime = performance.now(); // For FPS calculation
        this.lastFrameTime = performance.now();

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.hoveredEnemy = null;
        this.hoveredPlayer = null;
        this.currentOutlinedEnemy = null;
        this.hoverInfo = document.getElementById('hover-info');
        this.scopeOverlay = document.getElementById('scope-overlay');
        this.minimapContainer = document.getElementById('minimap');
        this.minimapCanvas = document.getElementById('minimap-canvas');
        this.minimapCtx = this.minimapCanvas ? this.minimapCanvas.getContext('2d') : null;
        this.minimapSize = this.minimapCanvas ? this.minimapCanvas.width : 180;
        this.mapSize = (world && world.mapSize) ? world.mapSize : 200;
        this.multiplayer = null;

        // Mouse move listener for hover detection
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            this.mouse.set(x, y);

            // Perform raycast against all enemy child meshes for easier hover
            if (this.player && this.player.enemyManager && this.player.enemyManager.enemies.length > 0) {
                // Collect all child meshes of all enemies
                const allEnemyMeshes = [];
                this.player.enemyManager.enemies.forEach(enemy => {
                    enemy.mesh.traverse(child => {
                        if (child.isMesh) allEnemyMeshes.push(child);
                    });
                });
                this.raycaster.setFromCamera(this.mouse, this.player.camera);
                const intersects = this.raycaster.intersectObjects(allEnemyMeshes, true);
                if (intersects.length > 0) {
                    const obj = intersects[0].object;
                    // Find enemy instance by traversing parents
                    let cur = obj;
                    let found = null;
                    while (cur) {
                        found = this.player.enemyManager.enemies.find(en => cur.parent === en.mesh || cur === en.mesh || en.mesh.children.includes(cur));
                        if (found) break;
                        cur = cur.parent;
                    }
                    this.hoveredEnemy = found || obj || null;
                } else {
                    this.hoveredEnemy = null;
                }
            }

            
            // Multiplayer Hover Check (mouse-based for desktop)
            if (this.player && this.player.multiplayerClient && this.player.multiplayerClient.others.size > 0) {
                const remoteMeshes = Array.from(this.player.multiplayerClient.others.values());
                
                // Try mouse position first (desktop)
                this.raycaster.setFromCamera(this.mouse, this.player.camera);
                let mpIntersects = this.raycaster.intersectObjects(remoteMeshes, true);
                
                // If nothing found with mouse, try center screen (crosshair - touch & desktop)
                if (mpIntersects.length === 0) {
                    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.player.camera);
                    mpIntersects = this.raycaster.intersectObjects(remoteMeshes, true);
                }
                
                if (mpIntersects.length > 0) {
                    // Find which player was hit
                    let obj = mpIntersects[0].object;
                    let foundId = null;
                    while (obj) {
                        if (obj.userData && obj.userData.gameId) {
                            foundId = obj.userData.gameId;
                            break;
                        }
                        obj = obj.parent;
                    }
                    
                    if (foundId) {
                        // Get player info
                        const playerMesh = this.player.multiplayerClient.others.get(foundId);
                        const dist = this.player.mesh.position.distanceTo(mpIntersects[0].point);
                        const targetPos = playerMesh ? playerMesh.position : mpIntersects[0].point;
                        
                        // Get nickname from multiplayerClient data
                        let nick = `Player ${foundId.substring(0,4)}`;
                        if (this.player.multiplayerClient.remoteData && this.player.multiplayerClient.remoteData[foundId]) {
                            nick = this.player.multiplayerClient.remoteData[foundId].nick || nick;
                        }
                        
                        this.hoverInfo.innerHTML = `${nick} (${dist.toFixed(1)}m)<br>Pos: (${targetPos.x.toFixed(1)}, ${targetPos.y.toFixed(1)}, ${targetPos.z.toFixed(1)})`;
                        this.hoverInfo.style.display = 'block';
                        this.hoveredPlayer = foundId;
                    }
                } else if (!this.hoveredEnemy) {
                    // Only hide if not hovering enemy
                    this.hoveredPlayer = null;
                    if (!this.hoveredEnemy) {
                        this.hoverInfo.style.display = 'none';
                    }
                }
            }

        });

        // Bind touch/click handlers for hotbar slots so mobile can switch weapons
        try {
            this.slots.forEach((slot, idx) => {
                const handle = (ev) => {
                    try {
                        ev.preventDefault && ev.preventDefault();
                        ev.stopPropagation && ev.stopPropagation();
                        // Slots are 1-based in markup; weapons array is 0-based
                        if (this.player && typeof this.player.switchWeapon === 'function') {
                            this.player.switchWeapon(idx);
                        }
                    } catch (e) {}
                };
                // Ensure taps/clicks work on mobile; pointerdown is primary, click is fallback
                slot.addEventListener('pointerdown', handle);
                // also support touchstart for older browsers
                slot.addEventListener('touchstart', handle, { passive: false });
                slot.addEventListener('click', handle);
            });
        } catch (e) {}
    }

    update(deltaTime) {
        if (!this.player) return;

        // Get current time once for all timing checks (performance optimization)
        const currentTime = performance.now();

        // --- CORE UI UPDATES (Always run) ---

        // Health & Shield
        const healthPercent = Math.max(0, Math.min(100, (this.player.health / this.player.maxHealth) * 100));
        this.healthBar.style.width = `${healthPercent}%`;
        this.healthText.innerText = `${Math.ceil(this.player.health)} / ${this.player.maxHealth}`;
        
        const shieldPercent = Math.max(0, Math.min(100, (this.player.shield / this.player.maxShield) * 100));
        this.shieldBar.style.width = `${shieldPercent}%`;
        this.shieldText.innerText = `${Math.ceil(this.player.shield)}`;

        // Stamina
        if (this.staminaBar && this.player.maxStamina) {
            const staminaPercent = Math.max(0, Math.min(100, (this.player.stamina / this.player.maxStamina) * 100));
            this.staminaBar.style.width = `${staminaPercent}%`;
            this.staminaText.innerText = `${Math.ceil(this.player.stamina)}`;
        }

        // Weapon Info - only update DOM if changed
        const weapon = this.player.weapons[this.player.currentWeaponIndex];
        if (this.lastWeaponName !== weapon.name) {
            this.weaponName.innerText = weapon.name;
            this.lastWeaponName = weapon.name;
        }
        
        // Ammo - only update DOM if changed
        let newAmmoText;
        if (weapon.name === 'Fist') {
            newAmmoText = '∞';
        } else {
            newAmmoText = weapon.ammo === Infinity ? '∞' : `${weapon.currentMag} / ${weapon.ammo}`;
        }
        
        if (this.lastAmmoText !== newAmmoText) {
            this.ammoCount.innerText = newAmmoText;
            this.lastAmmoText = newAmmoText;
        }

        // Crosshair color: red if within weapon range, yellow if visible but out of range
        const crosshair = document.getElementById('crosshair');
        if (crosshair) {
            crosshair.classList.remove('target-red', 'target-yellow');
            const weaponRange = weapon && weapon.range ? weapon.range : 1000;
            // We need distance to hovered enemy for this
            // Re-using the raycast logic below for hover, but we need it here.
            // Let's do the hover check first? Or just do a quick check here?
            // Actually, let's keep the hover logic here as it's part of core gameplay feedback
        }

        // Hotbar Active State
        this.slots.forEach((slot, index) => {
            if (index === this.player.currentWeaponIndex) {
                slot.classList.add('active');
            } else {
                slot.classList.remove('active');
            }
        });

        // Timer - reuse currentTime from throttling above
        if (currentTime - this.lastTime > 1000) {
            this.timeRemaining--;
            if (this.timeRemaining < 0) this.timeRemaining = 0;
            
            const minutes = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
            const seconds = (this.timeRemaining % 60).toString().padStart(2, '0');
            this.timerValue.innerText = `${minutes}:${seconds}`;
            
            this.lastTime = currentTime;
        }

        // Game Over
        if (this.player.isDead && this.player.gameMode !== 'matrix') {
            this.showGameOver("YOU DIED");
        }

        // Minimap
        this.updateMinimap();

        // Hover Logic (Core Gameplay)
        this.hoveredEnemy = null;
        if (this.player && this.player.enemyManager && this.player.enemyManager.enemies.length > 0) {
            // ... (Keep existing hover logic) ...
            // For brevity in this replacement, I'll assume the raycast logic below is moved here or duplicated.
            // Actually, let's just let the debug section handle the heavy raycasting if it's expensive?
            // No, crosshair color depends on it.
            // Let's copy the hover logic here.
             // Collect all child meshes of all enemies
             const allEnemyMeshes = [];
             this.player.enemyManager.enemies.forEach(enemy => {
                 enemy.mesh.traverse(child => {
                     if (child.isMesh) allEnemyMeshes.push(child);
                 });
             });
             this.raycaster.setFromCamera(this.mouse, this.player.camera);
             const intersects = this.raycaster.intersectObjects(allEnemyMeshes, true);
             let hoveredDistNum = null;
             if (intersects.length > 0) {
                 const obj = intersects[0].object;
                 hoveredDistNum = intersects[0].distance;
                 // Find enemy instance
                 let cur = obj;
                 let found = null;
                 while (cur) {
                     found = this.player.enemyManager.enemies.find(en => cur.parent === en.mesh || cur === en.mesh || en.mesh.children.includes(cur));
                     if (found) break;
                     cur = cur.parent;
                 }
                 this.hoveredEnemy = found || obj || null;
             }
             
             // Update crosshair based on hover
             if (crosshair && this.hoveredEnemy && hoveredDistNum !== null) {
                if (hoveredDistNum <= (weapon.range || 1000)) {
                    crosshair.classList.add('target-red');
                } else {
                    crosshair.classList.add('target-yellow');
                }
            }
        }

        // Outline overlay (Visual feedback)
        if (this.player && this.player.enemyManager) {
            if (this.currentOutlinedEnemy !== this.hoveredEnemy) {
                // Remove previous
                if (this.currentOutlinedEnemy && this.currentOutlinedEnemy._outline) {
                    try { this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline); } catch (e) {}
                    this.currentOutlinedEnemy._outline = null;
                }
                // Add new
                if (this.hoveredEnemy && this.hoveredEnemy.mesh) {
                    const outlineGroup = new THREE.Group();
                    this.hoveredEnemy.mesh.traverse(child => {
                        if (child.isMesh) {
                            const outlineMesh = new THREE.Mesh(child.geometry, new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.BackSide }));
                            outlineMesh.position.copy(child.position);
                            outlineMesh.quaternion.copy(child.quaternion);
                            outlineMesh.scale.copy(child.scale).multiplyScalar(1.06);
                            outlineMesh.renderOrder = 999;
                            outlineMesh.material.depthTest = true;
                            outlineGroup.add(outlineMesh);
                        }
                    });
                    this.hoveredEnemy.mesh.add(outlineGroup);
                    this.hoveredEnemy._outline = outlineGroup;
                }
                this.currentOutlinedEnemy = this.hoveredEnemy;
            }
        }


        // --- HOVER DETECTION & CROSSHAIR COLOR (Always Active) ---
        
        // Hover info above crosshair - detect what we're aiming at
        let hoveredDistNum = null;
        this.hoveredPlayer = null;
        
        // Throttle raycasts for performance - only run every 150ms
        const shouldRunRaycast = currentTime - this.lastRaycastTime >= this.raycastInterval;
        
        if (shouldRunRaycast && !this.hoveredEnemy && this.player && this.player.enemyManager && this.player.enemyManager.enemies.length > 0) {
            this.lastRaycastTime = currentTime;
            
            // Cache enemy meshes to avoid expensive traverse() every frame
            if (currentTime - this.enemyMeshCacheTime >= this.enemyMeshCacheDuration || this.cachedEnemyMeshes.length === 0) {
                this.cachedEnemyMeshes = [];
                this.player.enemyManager.enemies.forEach(enemy => {
                    enemy.mesh.traverse(child => {
                        if (child.isMesh) this.cachedEnemyMeshes.push(child);
                    });
                });
                this.enemyMeshCacheTime = currentTime;
            }
            
            if (this.cachedEnemyMeshes.length > 0) {
                // Raycast from center of screen
                this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.player.camera);
                const centerIntersects = this.raycaster.intersectObjects(this.cachedEnemyMeshes, false);
                if (centerIntersects.length > 0) {
                    const obj = centerIntersects[0].object;
                    let cur = obj;
                    let found = null;
                    while (cur) {
                        found = this.player.enemyManager.enemies.find(en => cur.parent === en.mesh || cur === en.mesh || en.mesh.children.includes(cur));
                        if (found) break;
                        cur = cur.parent;
                    }
                    if (found) this.hoveredEnemy = found; else this.hoveredEnemy = null;
                } else {
                    this.hoveredEnemy = null;
                }
            }
        }
        
        // If still nothing, try to find a remote player under the crosshair
        if (!this.hoveredEnemy && this.multiplayer && this.multiplayer.others && this.multiplayer.others.size > 0) {
            const remoteMeshes = [];
            this.multiplayer.others.forEach(m => {
                if (!m) return;
                if (m.isMesh) {
                    remoteMeshes.push(m);
                } else if (m.traverse) {
                    m.traverse(child => { if (child.isMesh) remoteMeshes.push(child); });
                }
            });
            if (remoteMeshes.length > 0) {
                this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.player.camera);
                const hits = this.raycaster.intersectObjects(remoteMeshes, true);
                if (hits.length > 0) {
                    let obj = hits[0].object;
                    // walk up to find the root mesh that belongs to the remote player
                    while (obj.parent && !obj.userData?.nick && !this.multiplayer.others.has(obj.userData?.gameId)) {
                        obj = obj.parent;
                    }
                    this.hoveredPlayer = obj;
                }
            }
        }
        
        // Display hover info (enemy name/ID and distance)
        // Only update DOM if text actually changed (performance optimization)
        if (this.hoverInfo) {
            let newHoverText = '';
            let shouldShow = false;
            
            if (this.hoveredEnemy) {
                const mesh = this.hoveredEnemy.mesh ? this.hoveredEnemy.mesh : (this.hoveredEnemy.isMesh ? this.hoveredEnemy : null) || this.hoveredEnemy;
                const id = (mesh && mesh.userData && (mesh.userData.gameId || mesh.userData.gameid)) ? (mesh.userData.gameId || mesh.userData.gameid) : '---';
                const enemyPos = (this.hoveredEnemy.position) ? this.hoveredEnemy.position : (mesh ? mesh.position : null);
                hoveredDistNum = enemyPos ? this.player.position.distanceTo(enemyPos) : null;
                const dist = hoveredDistNum ? hoveredDistNum.toFixed(2) : '---';
                newHoverText = `${id} • ${dist}m`;
                shouldShow = true;
            } else if (this.hoveredPlayer) {
                const nick = (this.hoveredPlayer.userData && this.hoveredPlayer.userData.nick) ? this.hoveredPlayer.userData.nick : 'Player';
                let targetPos = null;
                if (this.hoveredPlayer.getWorldPosition) {
                    targetPos = new THREE.Vector3();
                    this.hoveredPlayer.getWorldPosition(targetPos);
                } else {
                    targetPos = this.hoveredPlayer.position || null;
                }
                hoveredDistNum = targetPos ? this.player.position.distanceTo(targetPos) : null;
                const dist = hoveredDistNum ? hoveredDistNum.toFixed(2) : '---';
                newHoverText = `${nick} • ${dist}m`;
                shouldShow = true;
            }
            
            // Only update DOM if value changed
            if (this.lastHoverInfoText !== newHoverText) {
                this.hoverInfo.innerText = newHoverText;
                this.lastHoverInfoText = newHoverText;
            }
            
            // Only update display style if needed
            const currentDisplay = this.hoverInfo.style.display;
            const targetDisplay = shouldShow ? 'block' : 'none';
            if (currentDisplay !== targetDisplay) {
                this.hoverInfo.style.display = targetDisplay;
            }
        }

        // Crosshair color: red if within weapon range, yellow if visible but out of range
        if (crosshair) {
            crosshair.classList.remove('target-red', 'target-yellow');
            const weaponRange = weapon && weapon.range ? weapon.range : 1000;
            if (this.hoveredEnemy && hoveredDistNum !== null) {
                if (hoveredDistNum <= weaponRange) {
                    crosshair.classList.add('target-red');
                } else {
                    crosshair.classList.add('target-yellow');
                }
            }
        }

        // --- DEBUG / DASHBOARD UPDATES (Only if enabled) ---
        if (!this.debugEnabled) {
            return;
        }

        // Dashboard Stats
        this.frames++;
        const now = performance.now();
        if (now - this.lastFpsTime >= 1000) {
            this.fpsCounter.innerText = this.frames;
            this.frames = 0;
            this.lastFpsTime = now;
            
            if (performance.memory && this.memoryUsage) {
                this.memoryUsage.innerText = Math.round(performance.memory.usedJSHeapSize / 1048576);
            }
        }
        const frameDeltaMs = now - this.lastFrameTime;
        this.lastFrameTime = now;
        this.frameTimeAvg = this.frameTimeAvg === 0 ? frameDeltaMs : (this.frameTimeAvg * 0.9 + frameDeltaMs * 0.1);

        if (this.player.enemyManager) {
            this.enemyCount.innerText = this.player.enemyManager.enemies.length;
            this.killCount.innerText = this.player.enemyManager.killedCount || 0;
        }
        // Drops
        if (this.dropCount) {
            const im = (typeof window !== 'undefined' && window.game && window.game.itemManager) ? window.game.itemManager : null;
            if (im && Array.isArray(im.items)) {
                const total = im.items.filter(it => !(it.userData && it.userData.isOpened)).length;
                this.dropCount.innerText = total;
            } else {
                this.dropCount.innerText = '0';
            }
        }

        // Distance & Speed
        const distanceKm = (this.player.distanceTraveled / 1000).toFixed(2);
        if (this.distanceTraveled) this.distanceTraveled.innerText = distanceKm;
        
        if (this.playerSpeed) {
            let speed = 0;
            if (this.player.isInVehicle && typeof this.player.currentSpeed === 'number') {
                speed = this.player.currentSpeed * 3.6;
            } else if (typeof this.player.currentSpeed === 'number') {
                speed = this.player.currentSpeed * 3.6;
            }
            this.playerSpeed.innerText = speed.toFixed(1);
        }
        
        if (this.mapSizeText) {
            const size = (this.world && this.world.mapSize) ? this.world.mapSize : this.mapSize;
            this.mapSizeText.innerText = Math.round(size);
        }

        // Performance dashboard details
        if (this._renderer) {
            if (this.isPerfCollapsed()) {
                return;
            }
            const info = this._renderer.info;
            if (this.perfFrame) this.perfFrame.innerText = frameDeltaMs.toFixed(1);
            if (this.perfCalls) this.perfCalls.innerText = info.render.calls;
            if (this.perfTris) this.perfTris.innerText = info.render.triangles;
            if (this.perfGeoms) this.perfGeoms.innerText = info.memory.geometries;
            if (this.perfTextures) this.perfTextures.innerText = info.memory.textures;
            if (this.perfPrograms) this.perfPrograms.innerText = info.programs ? info.programs.length : '0';

            // Object count: world objects + items + enemies
            let totalObjs = 0;
            if (this.world && Array.isArray(this.world.objects)) totalObjs += this.world.objects.length;
            const im = (typeof window !== 'undefined' && window.game && window.game.itemManager) ? window.game.itemManager : null;
            if (im && Array.isArray(im.items)) totalObjs += im.items.length;
            if (this.player.enemyManager && Array.isArray(this.player.enemyManager.enemies)) totalObjs += this.player.enemyManager.enemies.length;
            if (this.perfObjects) this.perfObjects.innerText = totalObjs;

            if (this.perfMem && performance.memory) {
                this.perfMem.innerText = Math.round(performance.memory.usedJSHeapSize / 1048576);
            }
            if (this.perfCpu) this.perfCpu.innerText = `${this.frameTimeAvg.toFixed(1)} ms`;
            if (this.perfGpu) this.perfGpu.innerText = this.gpuInfo || 'Unsupported';
            this.updateGpuMemory();
        }

        this.updateNetPanel();

        // Update local player coordinates in dashboard
        if (this.player) {
            // Update Dashboard
            document.getElementById('fps-counter').innerText = Math.round(1 / (window.game ? window.game.clock.getDelta() : 0.016)); // Approx
            document.getElementById('player-speed').innerText = (this.player.currentSpeed * 3.6).toFixed(1);
            document.getElementById('distance-traveled').innerText = (this.player.distanceTraveled / 1000).toFixed(2);
            
            // Local Coords
            const pPos = this.player.mesh.position;
            const coordText = `Pos: (${pPos.x.toFixed(1)}, ${pPos.y.toFixed(1)}, ${pPos.z.toFixed(1)})`;
            let coordEl = document.getElementById('player-coords');
            if (!coordEl) {
                // Create if missing
                coordEl = document.createElement('div');
                coordEl.id = 'player-coords';
                document.getElementById('dashboard').appendChild(coordEl);
            }
            coordEl.innerText = coordText;

            // Resolution
            let resEl = document.getElementById('screen-res');
            if (!resEl) {
                resEl = document.createElement('div');
                resEl.id = 'screen-res';
                document.getElementById('dashboard').appendChild(resEl);
            }
            resEl.innerText = `Res: ${window.innerWidth}x${window.innerHeight}`;

            // Health & Shield
            const hpPct = Math.max(0, Math.min(100, this.player.health));
        }

        // Weapon (reuse variable from line 229)
        // weapon already declared above
        this.weaponName.innerText = weapon.name;
        
        if (this.player.isReloading) {
            this.ammoCount.innerText = "RELOADING...";
        } else {
            this.ammoCount.innerText = weapon.ammo === Infinity ? '∞' : `${weapon.currentMag} / ${weapon.ammo}`;
        }

        // Clear any legacy debug labels container
        if (this.debugContainer) this.debugContainer.innerHTML = '';

        // Update hovered enemy debug info (show ID and distance)
        if (this.debugInfo) {
            if (this.settings.debugMode) {
                this.debugInfo.style.display = 'block';
                if (this.hoveredEnemy) {
                    // Determine mesh and position robustly (hoveredEnemy can be enemy instance or mesh)
                    const mesh = this.hoveredEnemy.mesh ? this.hoveredEnemy.mesh : (this.hoveredEnemy.isMesh ? this.hoveredEnemy : null) || this.hoveredEnemy;
                    const name = (mesh && mesh.userData && mesh.userData.gameName) ? mesh.userData.gameName : 'Enemy';
                    const id = (mesh && mesh.userData && (mesh.userData.gameId || mesh.userData.gameid)) ? (mesh.userData.gameId || mesh.userData.gameid) : '---';
                    // Position fallback: prefer enemy.position if available, else mesh.position
                    const enemyPos = (this.hoveredEnemy.position) ? this.hoveredEnemy.position : (mesh ? mesh.position : null);
                    const dist = enemyPos ? this.player.position.distanceTo(enemyPos).toFixed(2) : '---';

                    this.debugName.innerText = name;
                    this.debugId.innerText = `${id} (${dist}m)`;
                } else {
                    this.debugName.innerText = 'None';
                    this.debugId.innerText = '---';
                }
            } else {
                this.debugInfo.style.display = 'none';
            }
        }

        // Sniper scope overlay
        if (this.scopeOverlay) {
            // weapon already declared at function scope (line 229)
            const sniperActive = this.player.isAiming && weapon && weapon.name === 'Sniper';
            this.scopeOverlay.classList.toggle('hidden', !sniperActive);
            // crosshair already declared at function scope (line 240)
            if (crosshair) {
                crosshair.classList.toggle('hidden', sniperActive);
            }
        }

        // Minimap
        this.updateMinimap();

        // Hotbar
        // Clear existing slots
        this.slots.forEach(s => s.style.display = 'none');
        
        // Update slots based on current weapons
        this.player.weapons.forEach((weapon, index) => {
            let slot = this.slots[index];
            if (!slot) {
                // Create new slot if needed (or just limit to 4)
                // For now assuming max 4 slots as per HTML
                return;
            }
            slot.style.display = 'flex';
            slot.innerText = index + 1;
            
            if (index === this.player.currentWeaponIndex) {
                slot.classList.add('active');
                // Show weapon name in slot? Or icon?
                // Just number is fine for now.
            } else {
                slot.classList.remove('active');
            }
        });

        // Game Over
        if (this.player.isDead && this.player.gameMode !== 'matrix') {
            this.showGameOver("YOU DIED");
        }

        // Show whatever is under the crosshair (world item/enemy/structure)
        this.updateTargetInspect();
    }

    showSelectionInfo(name, id) {
        if (!this.selectionInfo) return;
        const readableName = name || 'Object';
        const readableId = id || '---';
        this.selectionInfo.innerText = `${readableName} (${readableId})`;
        this.selectionInfo.classList.remove('hidden');
        if (this.selectionInfoTimeout) clearTimeout(this.selectionInfoTimeout);
        this.selectionInfoTimeout = setTimeout(() => {
            try {
                this.selectionInfo.classList.add('hidden');
            } catch (e) {}
        }, 2500);
    }

    updateTargetInspect() {
        if (!this.targetInspect || !this.player || !this.player.camera) return;
        const raycaster = this.raycaster;
        const center = new THREE.Vector2(0, 0);
        raycaster.setFromCamera(center, this.player.camera);

        const pickables = [];
        // World geometry/props
        if (this.world && Array.isArray(this.world.objects)) pickables.push(...this.world.objects);
        // Items (chests, bottles, backpacks)
        if (this.world && this.world.itemManager && Array.isArray(this.world.itemManager.items)) {
            pickables.push(...this.world.itemManager.items);
        }
        // Enemies
        if (this.player.enemyManager && Array.isArray(this.player.enemyManager.enemies)) {
            this.player.enemyManager.enemies.forEach(enemy => {
                if (enemy && enemy.mesh) pickables.push(enemy.mesh);
            });
        }

        if (pickables.length === 0) {
            this.targetInspect.innerText = 'Target: ---';
            return;
        }

        // Deduplicate objects to avoid redundant ray tests
        const uniq = Array.from(new Set(pickables));
        const hits = raycaster.intersectObjects(uniq, true);
        if (!hits.length) {
            this.targetInspect.innerText = 'Target: ---';
            return;
        }

        let data = null;
        for (let i = 0; i < hits.length; i++) {
            let obj = hits[i].object;
            while (obj) {
                if (obj.userData && (obj.userData.gameName || obj.userData.type || obj.userData.gameId || obj.userData.gameid)) {
                    data = obj.userData;
                    break;
                }
                obj = obj.parent;
            }
            if (data) break;
        }

        if (!data) {
            this.targetInspect.innerText = 'Target: ---';
            return;
        }

        const name = data.gameName || 'Object';
        const id = data.gameId || data.gameid || '---';
        const type = data.type || '---';
        this.targetInspect.innerText = `Target: ${name} (ID: ${id}) [${type}]`;
    }

    showGameOver(message) {
        if (this.player && this.player.gameMode === 'matrix') return;
        // Prevent multiple calls
        if (this.gameOverShown) return;
        this.gameOverShown = true;
        
        this.gameOverScreen.classList.remove('hidden');
        document.getElementById('game-over-title').innerText = message;
        
        // Hide touch controls on game over
        try {
            const touchControls = document.getElementById('touch-controls');
            if (touchControls) {
                touchControls.style.display = 'none';
            }
        } catch (e) {}

        // Hide hotbar on game over
        if (this.hotbar) {
            this.hotbar.style.display = 'none';
        }
        
        // Simple restart logic
        const restartBtn = document.getElementById('restart-btn');
        restartBtn.onclick = () => {
            location.reload();
        };
        // Ensure button is clickable on tablet
        restartBtn.style.pointerEvents = 'auto';
        restartBtn.style.cursor = 'pointer';
        
        // If this is a death message, trigger defeat audio sequence on the global game object
        try {
            if (typeof window !== 'undefined' && window.game && message && message.toUpperCase().includes('DIED')) {
                if (typeof window.game.playEndSequence === 'function') {
                    window.game.playEndSequence(defeatSfx);
                }
            }
        } catch (e) { }
    }

    showVictory() {
        if (this.player && this.player.gameMode === 'matrix') return;
        // Reset flag to allow showGameOver to run
        this.gameOverShown = false;
        this.showGameOver("VICTORY ROYALE!");
        document.getElementById('game-over-title').style.color = '#f1c40f'; // Gold color

        // Stop player looping sounds (footsteps) on victory
        try {
            if (this.player && typeof this.player.stopFootsteps === 'function') {
                this.player.stopFootsteps();
            }
        } catch (e) {}
        
        // Hide touch controls on victory
        try {
            const touchControls = document.getElementById('touch-controls');
            if (touchControls) {
                touchControls.style.display = 'none';
            }
        } catch (e) {}

        // Stop any pending damage sounds
        try {
            if (this.player && typeof this.player.clearHurtQueue === 'function') {
                this.player.clearHurtQueue();
            }
        } catch (e) {}
        
        try {
            if (typeof window !== 'undefined' && window.game && typeof window.game.playEndSequence === 'function') {
                window.game.playEndSequence(victorySfx);
            }
        } catch (e) { }
    }

    updateMinimap() {
        if (!this.minimapContainer) return;

        const enabled = this.settings.showMinimap !== false;
        this.minimapContainer.classList.toggle('hidden', !enabled);
        if (!enabled || !this.minimapCtx || !this.player) return;

        const ctx = this.minimapCtx;
        const size = this.minimapSize;
        ctx.clearRect(0, 0, size, size);

        // Background and border
        ctx.fillStyle = 'rgba(10, 12, 20, 0.75)';
        ctx.fillRect(0, 0, size, size);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, size - 2, size - 2);

        const half = Math.max(1, (this.world && this.world.halfMapSize) ? this.world.halfMapSize : (this.mapSize / 2));
        const radius = size * 0.45;
        const cx = size / 2;
        const cz = size / 2;

        // Storm ring
        if (this.world && typeof this.world.stormRadius === 'number' && this.world.stormRadius > 0) {
            const stormScale = Math.max(0, Math.min(1.2, this.world.stormRadius / half));
            const stormR = radius * stormScale;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(157, 77, 187, 0.85)';
            ctx.lineWidth = 3;
            ctx.arc(cx, cz, stormR, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Enemy dots (zombies)
        const enemies = this.player && this.player.enemyManager && Array.isArray(this.player.enemyManager.enemies)
            ? this.player.enemyManager.enemies
            : [];
        if (enemies.length) {
            ctx.fillStyle = '#ff3b30';
            ctx.strokeStyle = '#660000';
            ctx.lineWidth = 1.5;
            enemies.forEach(enemy => {
                if (!enemy) return;
                const pos = enemy.position || (enemy.mesh && enemy.mesh.position);
                if (!pos) return;
                const ex = Math.max(cx - radius, Math.min(cx + radius, cx + (pos.x / half) * radius));
                const ez = Math.max(cz - radius, Math.min(cz + radius, cz - (pos.z / half) * radius));
                ctx.beginPath();
                ctx.arc(ex, ez, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });
        }

        // Houses/buildings
        const houses = (this.world && Array.isArray(this.world.objects))
            ? this.world.objects.filter(o => o && o.userData && o.userData.type === 'house')
            : [];
        if (houses.length) {
            ctx.fillStyle = '#ffd166';
            ctx.strokeStyle = '#8c5a00';
            ctx.lineWidth = 1;
            houses.forEach(h => {
                const pos = h.position;
                if (!pos) return;
                const hx = Math.max(cx - radius, Math.min(cx + radius, cx + (pos.x / half) * radius));
                const hz = Math.max(cz - radius, Math.min(cz + radius, cz - (pos.z / half) * radius));
                ctx.beginPath();
                ctx.arc(hx, hz, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });
        }

        // Player dot
        const px = Math.max(cx - radius, Math.min(cx + radius, cx + (this.player.position.x / half) * radius));
        const pz = Math.max(cz - radius, Math.min(cz + radius, cz - (this.player.position.z / half) * radius));
        ctx.beginPath();
        ctx.fillStyle = '#00d8ff';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.arc(px, pz, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Remote multiplayer players
        if (this.multiplayer && this.multiplayer.others && this.multiplayer.others.size > 0) {
            this.multiplayer.others.forEach(mesh => {
                if (!mesh || !mesh.position) return;
                const mx = Math.max(cx - radius, Math.min(cx + radius, cx + (mesh.position.x / half) * radius));
                const mz = Math.max(cz - radius, Math.min(cz + radius, cz - (mesh.position.z / half) * radius));
                const color = (mesh.userData && mesh.userData.color) ? mesh.userData.color : '#ffaa00';
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.strokeStyle = '#111';
                ctx.lineWidth = 2;
                ctx.arc(mx, mz, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });
        }

        // Player heading arrow
        try {
            const forward = new THREE.Vector3();
            if (this.player && this.player.camera && this.player.camera.getWorldDirection) {
                this.player.camera.getWorldDirection(forward);
            }
            forward.y = 0;
            if (forward.lengthSq() < 0.0001 && this.player.mesh) {
                forward.set(0, 0, -1).applyEuler(this.player.mesh.rotation);
                forward.y = 0;
            }
            if (forward.lengthSq() > 0.0001) {
                forward.normalize();
                // Map to minimap orientation (x -> right, z -> up -> negative canvas Y)
                const dx = forward.x;
                const dy = -forward.z;
                const angle = Math.atan2(dy, dx) + Math.PI / 2;
                ctx.save();
                ctx.translate(px, pz);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.moveTo(0, -10);
                ctx.lineTo(6, 8);
                ctx.lineTo(-6, 8);
                ctx.closePath();
                ctx.fillStyle = '#00d8ff';
                ctx.strokeStyle = '#003f4f';
                ctx.lineWidth = 2;
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
        } catch (e) {}
    }

    updateNetPanel() {
        if (this.isPerfCollapsed()) return;
        if (!this.netStatsText && !this.netChartCtx) return;
        const stats = (this.multiplayer && typeof this.multiplayer.getNetStats === 'function') ? this.multiplayer.getNetStats() : null;
        if (!stats) {
            if (this.netStatsText) this.netStatsText.innerText = 'offline';
            if (this.netChartCtx) this.netChartCtx.clearRect(0, 0, this.netChart.width, this.netChart.height);
            return;
        }
        const txKbps = (stats.txPerSec || 0) / 1024;
        const rxKbps = (stats.rxPerSec || 0) / 1024;
        const pingText = (typeof stats.lastPing === 'number') ? `${Math.max(0, stats.lastPing).toFixed(0)} ms` : '--';
        if (this.netStatsText) {
            this.netStatsText.innerText = `↑ ${txKbps.toFixed(1)} kbps ↓ ${rxKbps.toFixed(1)} kbps • ping ${pingText}`;
        }
        if (!this.netChartCtx || !this.netChart) return;
        const ctx = this.netChartCtx;
        const w = this.netChart.width;
        const h = this.netChart.height;
        const history = Array.isArray(stats.history) ? stats.history : [];
        ctx.clearRect(0, 0, w, h);
        if (!history.length) return;
        const maxKbps = history.reduce((m, s) => Math.max(m, Math.max(s.tx || 0, s.rx || 0) / 1024), 1);
        const pad = 2;
        const len = history.length;
        const toX = (i) => {
            if (len <= 1) return pad;
            return pad + (i / (len - 1)) * (w - pad * 2);
        };
        const toY = (val) => {
            const norm = Math.max(0, Math.min(1, (val / 1024) / maxKbps));
            return h - pad - norm * (h - pad * 2);
        };

        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.beginPath();
        ctx.moveTo(pad, h - pad);
        ctx.lineTo(w - pad, h - pad);
        ctx.stroke();

        const drawLine = (color, accessor) => {
            ctx.strokeStyle = color;
            ctx.beginPath();
            history.forEach((s, idx) => {
                const x = toX(idx);
                const y = toY(accessor(s) || 0);
                if (idx === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
        };

        drawLine('rgba(0, 210, 255, 0.85)', (s) => s.rx || 0);
        drawLine('rgba(255, 150, 50, 0.85)', (s) => s.tx || 0);
    }

    updateGpuMemory() {
        if (!this.perfGpuMem) return;
        // If GPU extension unavailable, show JS heap like the example snippet (fallback)
        if (!this.gpuMemInfo || !this._gl) {
            if (performance.memory) {
                const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(1);
                const limit = (performance.memory.jsHeapSizeLimit / 1048576).toFixed(0);
                this.perfGpuMem.innerText = `${used} / ${limit} MB (heap)`;
            } else {
                this.perfGpuMem.innerText = 'Unsupported';
            }
            return;
        }
        const now = performance.now();
        if (!this.gpuMemInfo.lastUpdate || now - this.gpuMemInfo.lastUpdate > 1000) {
            try {
                const avail = this._gl.getParameter(this.gpuMemInfo.ext.GPU_MEMORY_INFO_CURRENT_AVAILABLE_VIDMEM_NVX);
                this.gpuMemInfo.lastAvailKb = avail || this.gpuMemInfo.lastAvailKb;
                this.gpuMemInfo.lastUpdate = now;
            } catch (e) {}
        }
        const totalMb = this.gpuMemInfo.totalKb ? (this.gpuMemInfo.totalKb / 1024) : null;
        const availMb = this.gpuMemInfo.lastAvailKb ? (this.gpuMemInfo.lastAvailKb / 1024) : null;
        if (totalMb && availMb) {
            const used = Math.max(0, totalMb - availMb);
            this.perfGpuMem.innerText = `${used.toFixed(1)} / ${totalMb.toFixed(1)} MB`;
        } else if (availMb) {
            this.perfGpuMem.innerText = `${availMb.toFixed(1)} MB free`;
        } else {
            this.perfGpuMem.innerText = 'Unknown';
        }
    }

    initGpuInfo() {
        if (!this._renderer || this.gpuInfo) return;
        try {
            const gl = this._renderer.getContext();
            this._gl = gl;
            const dbg = gl.getExtension('WEBGL_debug_renderer_info');
            const name = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
            this.gpuInfo = name || 'Unknown GPU';
            const memExt = gl.getExtension('WEBGL_gpu_memory_info');
            if (memExt) {
                const totalKb = gl.getParameter(memExt.GPU_MEMORY_INFO_TOTAL_AVAILABLE_MEMORY_KB) ||
                    gl.getParameter(memExt.GPU_MEMORY_INFO_DEDICATED_VIDMEM_NVX) ||
                    null;
                const availKb = gl.getParameter(memExt.GPU_MEMORY_INFO_CURRENT_AVAILABLE_VIDMEM_NVX) || null;
                this.gpuMemInfo = {
                    ext: memExt,
                    totalKb,
                    lastAvailKb: availKb,
                    lastUpdate: 0
                };
            }
        } catch (e) {
            this.gpuInfo = 'Unknown GPU';
        }
    }

    setRenderer(renderer) {
        this._renderer = renderer;
        this.initGpuInfo();
    }

    setMultiplayer(multiplayer) {
        this.multiplayer = multiplayer;
    }

    isPerfCollapsed() {
        return this.perfEl && this.perfEl.classList.contains('collapsed');
    }
    
    setDebugEnabled(enabled) {
        this.debugEnabled = enabled;
        
        // Hide/show dashboard container
        const dashContainer = document.querySelector('.dashboardContainer');
        if (dashContainer) {
            dashContainer.style.display = enabled ? 'flex' : 'none';
        }
        
        // Also control individual dashboards
        if (this.dashboardEl) {
            this.dashboardEl.style.display = enabled ? 'block' : 'none';
        }
        if (this.perfDashboardEl) {
            this.perfDashboardEl.style.display = enabled ? 'block' : 'none';
        }
    }
}
