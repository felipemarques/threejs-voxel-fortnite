// Minimal WebSocket relay for multiplayer position sync
// Run with: npm run server
import { WebSocketServer } from 'ws';
import { randomUUID } from 'crypto';

const PORT = process.env.PORT || 3001;
const wss = new WebSocketServer({ port: PORT });

const clients = new Map(); // id -> { ws, room }
const rooms = new Map();   // roomCode -> { clients: Set<id>, hostId: string, countdown: NodeJS.Timeout | null }

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

      if (data.type === 'join' && data.room) {
        // Leave previous room if any
        if (entry.room && rooms.has(entry.room)) {
          const prev = rooms.get(entry.room);
          prev.clients.delete(id);
          broadcastToRoom(entry.room, { type: 'player-leave', id });
        }
        entry.room = data.room;
        let room = rooms.get(data.room);
        if (!room) {
          room = { clients: new Set(), hostId: id, countdown: null };
          rooms.set(data.room, room);
        }
        room.clients.add(id);
        // If host left previously, set first client as host
        if (!room.hostId || !room.clients.has(room.hostId)) {
          room.hostId = id;
        }
        ws.send(JSON.stringify({ type: 'welcome', id, room: data.room, isHost: room.hostId === id }));
        broadcastToRoom(data.room, { type: 'player-join', id });
      }

      if (!entry.room) return; // ignore until joined
      const room = rooms.get(entry.room);
      if (!room) return;

      if (data.type === 'state' && data.pos) {
        broadcastToRoom(entry.room, { type: 'state', id, pos: data.pos, nick: data.nick, color: data.color, anim: data.anim });
      } else if (data.type === 'hit' && data.targetId && typeof data.amount === 'number') {
        broadcastToRoom(entry.room, { type: 'hit', from: id, targetId: data.targetId, amount: data.amount });
      } else if (data.type === 'start' && room.hostId === id) {
        // prevent overlapping countdowns
        if (room.countdown) clearTimeout(room.countdown);
        broadcastToRoom(entry.room, { type: 'start-countdown', duration: 10 });
        room.countdown = setTimeout(() => {
          broadcastToRoom(entry.room, { type: 'match-start' });
          room.countdown = null;
        }, 10000);
      }
    } catch (e) {}
  });

  ws.on('close', () => {
    const entry = clients.get(id);
    if (entry && entry.room && rooms.has(entry.room)) {
      const room = rooms.get(entry.room);
      room.clients.delete(id);
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
      }
    }
    clients.delete(id);
    console.log(`[MP] Client disconnected ${id}. Active: ${clients.size}`);
  });
});

console.log(`Multiplayer relay listening on ws://localhost:${PORT}`);
