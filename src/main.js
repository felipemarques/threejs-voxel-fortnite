import * as THREE from 'three';
import bgMusic from './assets/background-music-by-suno.ogg';
import { World, DEFAULT_MAP_SIZE } from './world.js';
import { Player } from './player.js';
import { HUD } from './hud.js';
import { EnemyManager } from './enemies.js';
import { ItemManager } from './items.js';
import { TouchControls } from './touchControls.js';
import { MultiplayerClient } from './multiplayerClient.js';

window.DEBUG_STATIC_TEST = true; // Enable debug mode (disable movement)

// Mobile/coarse-pointer detection used to avoid Pointer Lock on touch devices
const IS_MOBILE = (() => {
    try {
        if (typeof navigator === 'undefined') return false;
        return /Mobi|Android|iPhone|iPad|Tablet|Mobile/i.test(navigator.userAgent)
            || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    } catch (e) { return false; }
})();

// Suppress known Chromium UnknownError spam from pointer/fullscreen promises
window.addEventListener('unhandledrejection', (ev) => {
    try {
        const reason = ev.reason;
        const msg = reason && reason.message ? reason.message : String(reason);
        if (msg && msg.includes('If you see this error we have a bug')) {
            // prevent the devtools from filling with this known Chromium runtime issue
            console.warn('Suppressed Chromium UnknownError:', msg);
            ev.preventDefault && ev.preventDefault();
            return;
        }
    } catch (e) {}
    // allow other rejections to surface
});
import { createDebugOverlay } from './debugOverlay.js';
import Stats from 'three/addons/libs/stats.module.js';


class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
        this.scene.fog = new THREE.Fog(0x87CEEB, 20, 100);
        this._animationStarted = false;
        this._selectedMode = 'arcade';
        this._defaultRandom = Math.random;
        this._currentRandomSeed = null;
        this.matchSettings = null;
        this.lastPlaySettings = null;
        this.aiObjects = [];
        
        // FPS Monitor (Stats.js) - Hidden by default, shown when debug enabled
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb
        this.stats.dom.style.position = 'absolute';
        this.stats.dom.style.left = '5px';
        this.stats.dom.style.top = '5px';
        this.stats.dom.style.zIndex = '100';
        this.stats.dom.style.display = 'none'; // Hidden by default
        document.body.appendChild(this.stats.dom);
        this.aiMaxAiObjects = 200;

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        // Cap pixel ratio to avoid ultra-high-res rendering on dense displays
        const maxPixelRatio = IS_MOBILE ? 1.0 : 1.5;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap;
        document.getElementById('game-container').appendChild(this.renderer.domElement);
        this._renderScaleApplied = this.renderer.getPixelRatio();
        this.multiplayerDropTimer = 0;
        this.multiplayerDropCooldown = 0;
        this.multiplayerDropActive = false;
        this.matchPhase = 'live';
        this.lobbyCountdown = 0;
        this.forceFixedMultiplayerSpawn = false;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(50, 100, 50);
        dirLight.castShadow = true;
        dirLight.shadow.camera.left = -100;
        dirLight.shadow.camera.right = 100;
        dirLight.shadow.camera.top = 100;
        dirLight.shadow.camera.bottom = -100;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 160;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        this.scene.add(dirLight);
        this.dirLight = dirLight;

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Clock
        this.clock = new THREE.Clock();
        // Object picking for click-to-identify
        this._pickRaycaster = new THREE.Raycaster();
        this._objectClickHandler = null;
        this._objectClickTarget = null;
        this._longPressTimer = null;
        this.hotkeyModalVisible = false;
        // Pause state
        this.isPaused = false;
        this.pauseMenu = document.getElementById('pause-menu');
        // Background music (initialized on user gesture)
        this.bgAudio = null;
        this.bgMusicVolume = 0.5;
        this._endSequenceAudio = null;
        this._prevBgVolume = null;
        this.autoPerfEnabled = false;
        this._autoPerfTimer = 0;
        this._renderScaleApplied = 1;
        this.sfxVolume = 0.7;
        // ESC key to toggle pause
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                this.togglePause();
            }
            // Studio shortcuts
            if (this.player && this.player.gameMode === 'studio') {
                if (e.code === 'KeyL') {
                    try { this.spawnStudioDrops(); } catch (err) { console.warn('Studio drop failed:', err); }
                } else if (e.code === 'KeyH') {
                    this.toggleHotkeyModal(!this.hotkeyModalVisible);
                }
            }
        });

        // Setup Menu
        this.setupMenu();
        this.setupLongPressMenu();
        // Start with menu open so HUD elements (hotbar) stay hidden until play
        this.setMenuOpenState(true);

        // Soften pointer lock errors in environments that reject the request (e.g. ESC before completion)
        document.addEventListener('pointerlockerror', (ev) => {
            ev.preventDefault && ev.preventDefault();
            console.warn('Pointer lock request failed or was cancelled.');
        });
    }

    applyGraphicsSettings(settings = {}) {
        if (!this.renderer) return;
        const perfMode = !!settings.performanceMode;
        const scale = Math.max(0.5, Math.min(1, (settings.renderScale || 100) / 100));
        const maxPixelRatio = IS_MOBILE ? 1.0 : (perfMode ? 1.25 : 1.5);
        const targetRatio = Math.min((window.devicePixelRatio || 1) * scale, maxPixelRatio);
        this.renderer.setPixelRatio(targetRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        const shadowsEnabled = !perfMode;
        this.renderer.shadowMap.enabled = shadowsEnabled;
        if (this.dirLight && this.dirLight.shadow) {
            this.dirLight.castShadow = shadowsEnabled;
            const size = perfMode ? 512 : 1024;
            this.dirLight.shadow.mapSize.width = size;
            this.dirLight.shadow.mapSize.height = size;
        }
    }

    applyDeterministicRandom(seed) {
        if (!seed) return;
        this._currentRandomSeed = seed;
        const str = String(seed);
        let h = 1779033703 ^ str.length;
        for (let i = 0; i < str.length; i++) {
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
            h = (h << 13) | (h >>> 19);
        }
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = (h ^ (h >>> 13)) >>> 0;
        let state = h;
        const seeded = () => {
            state = (state + 0x6D2B79F5) | 0;
            let t = Math.imul(state ^ (state >>> 15), 1 | state);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
        Math.random = seeded;
    }

    spawnStudioDrops() {
        if (!this.itemManager || !this.player || this.player.gameMode !== 'studio') return;
        try {
            // Drop a small batch near player
            for (let i = 0; i < 3; i++) {
                this.itemManager.spawnMatrixDropNearPlayer();
            }
        } catch (e) {
            console.warn('spawnStudioDrops error:', e);
        }
    }

    toggleHotkeyModal(show) {
        const modal = document.getElementById('hotkey-modal');
        if (!modal) return;
        modal.classList.toggle('hidden', !show);
        modal.setAttribute('aria-hidden', show ? 'false' : 'true');
        this.hotkeyModalVisible = show;
    }

    toggleTouchLookArea(show) {
        try {
            if (!this.touchControls) return;
            if (show) {
                if (!this.touchControls.lookArea) {
                    this.touchControls.rebuildLookArea && this.touchControls.rebuildLookArea();
                } else {
                    this.touchControls.lookArea.style.display = '';
                }
            } else {
                if (this.touchControls.destroyLookArea) {
                    this.touchControls.destroyLookArea();
                } else if (this.touchControls.lookArea) {
                    this.touchControls.lookArea.style.display = 'none';
                }
            }
        } catch (e) {}
    }

    setHotbarVisible(show) {
        const hotbar = document.getElementById('hotbar');
        if (!hotbar) return;
        hotbar.style.display = show ? 'flex' : 'none';
    }

    setMenuOpenState(open) {
        document.body.classList.toggle('menu-open', !!open);
    }

    updateDebugToggleVisibility(enabled) {
        const btn = document.getElementById('debug-toggle-btn');
        if (!btn) return;
        btn.classList.toggle('hidden', !enabled);
        
        // NOTE: Stats.js (FPS) is controlled independently by Show FPS checkbox, not debug mode
        
        if (!enabled && window.debugOverlay && typeof window.debugOverlay.hide === 'function') {
            try { window.debugOverlay.hide(); } catch (e) {}
            try { localStorage.removeItem('showDebugOverlay'); } catch (e) {}
        }
    }
    
    makeDashboardDraggable(elementId) {
        const dashboard = document.getElementById(elementId);
        if (!dashboard) return;
        
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        
        // Make cursor indicate draggable
        dashboard.style.cursor = 'move';
        
        const dragStart = (e) => {
            // Only drag if clicking on the dashboard itself, not child elements like inputs
            if (e.target !== dashboard && !e.target.classList.contains('dashboard-header')) return;
            
            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            
            isDragging = true;
        };
        
        const dragEnd = (e) => {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        };
        
        const drag = (e) => {
            if (!isDragging) return;
            
            e.preventDefault();
            
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, dashboard);
        };
        
        const setTranslate = (xPos, yPos, el) => {
            el.style.transform = `translate(${xPos}px, ${yPos}px)`;
        };
        
        dashboard.addEventListener("mousedown", dragStart);
        dashboard.addEventListener("mouseup", dragEnd);
        dashboard.addEventListener("mousemove", drag);
        dashboard.addEventListener("touchstart", dragStart);
        dashboard.addEventListener("touchend", dragEnd);
        dashboard.addEventListener("touchmove", drag);
    }

    assignMultiplayerSpawn() {
        if (!this.player || !this.world) return;
        const limit = this.world && typeof this.world.halfMapSize === 'number' ? this.world.halfMapSize - 5 : 100;
        let pos = null;
        const rand = this._defaultRandom || Math.random;

        // Fixed spawn for debugging minimap alignment
        if (this.forceFixedMultiplayerSpawn) {
            const fx = 0;
            const fz = 0;
            const fy = (this.world && typeof this.world.getHeightAt === 'function') ? this.world.getHeightAt(fx, fz) : 0;
            pos = { x: fx, y: fy, z: fz };
        } else {
            for (let i = 0; i < 12; i++) {
                const x = (rand() * 2 - 1) * limit;
                const z = (rand() * 2 - 1) * limit;
                let y = 0;
                if (this.world && typeof this.world.getHeightAt === 'function') {
                    // Skip terrain height in debug mode
                    if (!window.DEBUG_STATIC_TEST) {
                        y = this.world.getHeightAt(x, z);
                    }
                }
                const farEnough = !this.multiplayer || this.multiplayer.others.size === 0 || Array.from(this.multiplayer.others.values()).every(o => {
                    if (!o || !o.position) return true;
                    const dx = o.position.x - x;
                    const dz = o.position.z - z;
                    return Math.sqrt(dx * dx + dz * dz) > 15;
                });
                if (farEnough) {
                    pos = { x, y, z };
                    break;
                }
            }
        }

        if (!pos) {
            pos = { x: 0, y: 0, z: 0 };
        }
        this.player.mesh.position.set(pos.x, pos.y, pos.z);
        if (this.player.controls && this.player.controls.getObject) {
            this.player.controls.getObject().position.set(pos.x, pos.y + 1.6, pos.z);
        }
        if (this.player.camera) {
            this.player.camera.position.set(pos.x, pos.y + 1.6, pos.z);
        }
    }

    setupMultiplayerLobbyUI() {
        const lobbyUi = document.getElementById('mp-lobby');
        const lobbyBtn = document.getElementById('mp-start-btn');
        const lobbyStatus = document.getElementById('mp-lobby-status');
        if (!lobbyUi || !lobbyBtn || !lobbyStatus) return;
        lobbyUi.classList.remove('hidden');
        const roomCode = this.multiplayer && this.multiplayer.roomCode ? this.multiplayer.roomCode : 'PUBLIC';
        lobbyStatus.innerText = `Waiting in lobby (Room: ${roomCode})`;
        lobbyBtn.classList.toggle('hidden', !(this.multiplayer && this.multiplayer.isHost));
        lobbyBtn.onclick = () => {
            if (!this.multiplayer || !this.multiplayer.isHost) return;
            const peers = (typeof this.multiplayer.getPeerCount === 'function') ? Math.max(0, this.multiplayer.getPeerCount() - 1) : 0;
            const zombieCount = this.enemyManager ? (typeof this.enemyManager.targetCount === 'number' ? this.enemyManager.targetCount : (this.enemyManager.enemies ? this.enemyManager.enemies.length : 0)) : 0;
            if (peers <= 0 && zombieCount <= 0) {
                alert('Need at least 1 remote player or 1 NPC zombie before starting the match.');
                return;
            }
            this.beginLobbyCountdown(10);
            this.multiplayer.sendStart();
        };
        this.lobbyCountdown = 0;
        this.updateLobbyUI(this.multiplayer ? this.multiplayer.isHost : false);
    }

    updateLobbyUI(isHost) {
        const lobbyBtn = document.getElementById('mp-start-btn');
        if (lobbyBtn) lobbyBtn.classList.toggle('hidden', !isHost);
    }

    beginLobbyCountdown(duration = 10) {
        this.matchPhase = 'countdown';
        this.lobbyCountdown = duration;
        const lobbyUi = document.getElementById('mp-lobby');
        const lobbyCountdownEl = document.getElementById('mp-lobby-countdown');
        if (lobbyUi) lobbyUi.classList.remove('hidden');
        if (lobbyCountdownEl) lobbyCountdownEl.innerText = `Starting in ${Math.ceil(this.lobbyCountdown)}...`;
    }

    startMultiplayerMatch() {
        this.matchPhase = 'live';
        if (this.multiplayer) this.multiplayer.matchLive = true;
        this.refreshMultiplayerTargets();
        const lobbyUi = document.getElementById('mp-lobby');
        if (lobbyUi) lobbyUi.classList.add('hidden');
        this.lobbyCountdown = 0;
    }

    checkMultiplayerVictory() {
        if (!this.multiplayer) return;
        const deadSet = this.multiplayer.deadPeers || new Set();
        let aliveRemotes = 0;
        if (this.multiplayer.others && this.multiplayer.others.size > 0) {
            this.multiplayer.others.forEach((mesh, id) => {
                const dead = deadSet.has(id) || (mesh && mesh.userData && mesh.userData.dead);
                if (!dead) aliveRemotes += 1;
            });
        }
        const iAmAlive = this.player && !this.player.isDead;
        const totalAlive = (iAmAlive ? 1 : 0) + aliveRemotes;
        if (totalAlive === 1 && iAmAlive) {
            // Victory for the last standing player
            if (this.hud && typeof this.hud.showVictory === 'function') {
                this.hud.showVictory();
            }
            if (this.multiplayer) this.multiplayer.matchLive = false;
        }
    }

    setupMenu() {
        const menu = document.getElementById('main-menu');
        const playBtn = document.getElementById('play-btn');
        const diffSelect = document.getElementById('setting-difficulty');
        const enemiesInput = document.getElementById('setting-enemies');
        const stormInput = document.getElementById('setting-storm');
        const stormEnabledInput = document.getElementById('setting-storm-enabled');
        const mapSizeInput = document.getElementById('setting-map-size');
        const mapSizeVal = document.getElementById('map-size-val');
        const debugCheckbox = document.getElementById('setting-debug');
        const minimapCheckbox = document.getElementById('setting-minimap');
        const showFpsCheckbox = document.getElementById('setting-show-fps');
        const volumeSlider = document.getElementById('setting-music-volume');
        const volumeVal = document.getElementById('setting-music-volume-val');
        const sfxVolumeSlider = document.getElementById('setting-sfx-volume');
        const sfxVolumeVal = document.getElementById('setting-sfx-volume-val');
        const cameraSelect = document.getElementById('setting-camera');
        const mouthStyleSelect = document.getElementById('setting-mouth-style');
        const showHatCheckbox = document.getElementById('setting-show-hat');
        const perfModeCheckbox = document.getElementById('setting-performance-mode');
        const autoPerfCheckbox = document.getElementById('setting-auto-performance');
        const renderScaleInput = document.getElementById('setting-render-scale');
        const renderScaleVal = document.getElementById('render-scale-val');
        const touchCheckbox = document.getElementById('setting-touch-controls');
        const fullscreenCheckbox = document.getElementById('setting-fullscreen');
        const gameModeSelect = document.getElementById('setting-game-mode');
        const quitBtn = document.getElementById('quit-btn');
        const activeModeLabel = document.getElementById('active-mode-label');
        const activeModeChip = document.getElementById('active-mode-chip');
        const floatBtn = document.getElementById('float-btn');
        const openaiKeyInput = document.getElementById('setting-openai-key');
        const groqKeyInput = document.getElementById('setting-groq-key');
        const nvidiaKeyInput = document.getElementById('setting-nvidia-key');
        const mpServerInput = document.getElementById('setting-mp-server');
        const mpSeedInput = document.getElementById('setting-mp-seed');
        const mpRoomInput = document.getElementById('setting-mp-room');
        const mpRoomGenerate = document.getElementById('mp-room-generate');
        const mpSpawnInput = document.getElementById('setting-mp-spawn');
        const mpNickInput = document.getElementById('setting-mp-nickname');
        const mpColorInput = document.getElementById('setting-mp-color');
        const mpZombiesCheckbox = document.getElementById('setting-mp-zombies');
        const mpFixedSpawnCheckbox = document.getElementById('setting-mp-fixed-spawn');
        const languageSelect = document.getElementById('setting-language');
        const hotkeyHint = document.getElementById('hotkey-hint');
        const hotkeyModal = document.getElementById('hotkey-modal');
        const hotkeyClose = document.getElementById('hotkey-modal-close');
        const arenaTimeInput = document.getElementById('setting-arena-time');
        const arenaTimeVal = document.getElementById('arena-time-val');
        const arenaRespawnCheckbox = document.getElementById('setting-arena-respawn');
        const matrixInfiniteAmmoCheckbox = document.getElementById('setting-matrix-infinite-ammo');
        const matrixShowUICheckbox = document.getElementById('setting-matrix-show-ui');
        const matrixAiAutospawnCheckbox = document.getElementById('setting-matrix-ai-autospawn');
        const matrixAiHintsCheckbox = document.getElementById('setting-matrix-ai-hints');
        const studioFlightCheckbox = document.getElementById('setting-studio-flight');
        const studioShowGridCheckbox = document.getElementById('setting-studio-show-grid');
        const dashToggle = document.getElementById('dash-toggle');
        const perfToggle = document.getElementById('perf-toggle');
        
        const enemiesVal = document.getElementById('enemy-count-val');
        const stormVal = document.getElementById('storm-time-val');

        const bindRangeLabel = (inputEl, labelEl) => {
            if (!inputEl || !labelEl) return;
            const update = () => { labelEl.innerText = inputEl.value; };
            inputEl.addEventListener('input', update);
            inputEl.addEventListener('change', update);
            update();
        };
        const bindScaleLabel = (inputEl, labelEl) => {
            if (!inputEl || !labelEl) return;
            const update = () => { labelEl.innerText = inputEl.value; };
            inputEl.addEventListener('input', update);
            inputEl.addEventListener('change', update);
            update();
        };
        const persistSetting = (key, value) => {
            if (typeof window === 'undefined' || !window.localStorage) return;
            try {
                const raw = window.localStorage.getItem('voxel-firecraft-settings');
                const json = raw ? JSON.parse(raw) : {};
                json[key] = value;
                window.localStorage.setItem('voxel-firecraft-settings', JSON.stringify(json));
            } catch (e) {}
        };

        const bindToggle = (btn, targetId) => {
            if (!btn) return;
            btn.addEventListener('pointerdown', (ev) => {
                try { ev.preventDefault(); ev.stopPropagation(); } catch (e) {}
            });
            btn.addEventListener('click', (ev) => {
                try { ev.preventDefault(); ev.stopPropagation(); } catch (e) {}
                const target = document.getElementById(targetId);
                if (!target) return;
                const isCollapsed = target.classList.toggle('collapsed');
                Array.from(target.children).forEach((child) => {
                    if (child === btn) return;
                    child.style.display = isCollapsed ? 'none' : '';
                });
                btn.innerText = isCollapsed ? '+' : '–';
                
                // Control HUD debug mode when dashboard toggle changes
                if (targetId === 'dashboard' && this.hud && typeof this.hud.setDebugEnabled === 'function') {
                    this.hud.setDebugEnabled(!isCollapsed);
                }
            });
        };
        bindToggle(dashToggle, 'dashboard');
        bindToggle(perfToggle, 'perf-dashboard');
        
        // Debug panel clear button
        const debugClearBtn = document.getElementById('debug-clear-btn');
        if (debugClearBtn) {
            debugClearBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const debugInfo = document.getElementById('debug-info');
                if (debugInfo) {
                    debugInfo.style.display = 'none';
                    const targetName = document.getElementById('debug-target-name');
                    const targetId = document.getElementById('debug-target-id');
                    if (targetName) targetName.innerText = 'None';
                    if (targetId) targetId.innerText = '---';
                }
            });
        }

        // Load Settings
        const savedSettings = localStorage.getItem('voxel-firecraft-settings');
        if (savedSettings) {
            const s = JSON.parse(savedSettings);
            if (s.gameMode === 'survival') s.gameMode = 'arcade';
            diffSelect.value = s.difficulty;
            enemiesInput.value = s.enemyCount;
            stormInput.value = s.stormTime;
            enemiesVal.innerText = s.enemyCount;
            stormVal.innerText = s.stormTime;
            if (stormEnabledInput) stormEnabledInput.checked = s.stormEnabled !== false;
            if (mapSizeInput && mapSizeVal) {
                const ms = s.mapSize || DEFAULT_MAP_SIZE;
                mapSizeInput.value = ms;
                mapSizeVal.innerText = ms;
            }
            if (s.debugMode) debugCheckbox.checked = true;
            if (minimapCheckbox) minimapCheckbox.checked = s.showMinimap !== false;
            if (fullscreenCheckbox) fullscreenCheckbox.checked = !!s.fullscreen;
            if (s.musicVolume !== undefined && volumeSlider && volumeVal) {
                const v = parseInt(s.musicVolume, 10);
                volumeSlider.value = v;
                volumeVal.innerText = v;
                // Use power curve for better volume perception (logarithmic-like)
                this.bgMusicVolume = Math.pow(v / 100, 2);
            }
            if (sfxVolumeSlider && sfxVolumeVal && s.sfxVolume !== undefined) {
                const sv = parseInt(s.sfxVolume, 10);
                sfxVolumeSlider.value = sv;
                sfxVolumeVal.innerText = sv;
                this.sfxVolume = sv / 100;
            }
            if (s.cameraMode) cameraSelect.value = s.cameraMode;
            if (mouthStyleSelect && s.mouthStyle) mouthStyleSelect.value = s.mouthStyle;
            if (showHatCheckbox) showHatCheckbox.checked = s.showHat !== false;
            if (perfModeCheckbox) perfModeCheckbox.checked = !!s.performanceMode;
            if (autoPerfCheckbox) autoPerfCheckbox.checked = !!s.autoPerformance;
            if (renderScaleInput && renderScaleVal) {
                const rs = s.renderScale || 100;
                renderScaleInput.value = rs;
                renderScaleVal.innerText = rs;
            }
            if (s.useTouchControls !== undefined && touchCheckbox) touchCheckbox.checked = !!s.useTouchControls;
            if (s.gameMode && gameModeSelect) gameModeSelect.value = s.gameMode;
            if (s.gameMode) this._selectedMode = s.gameMode;
            if (languageSelect && s.language) languageSelect.value = s.language;
            if (openaiKeyInput) openaiKeyInput.value = s.openaiKey || '';
            if (groqKeyInput) groqKeyInput.value = s.groqKey || '';
            if (nvidiaKeyInput) nvidiaKeyInput.value = s.nvidiaKey || '';
            if (mpServerInput) mpServerInput.value = s.mpServer || '';
            if (mpSeedInput) mpSeedInput.value = s.mpSeed || '';
            if (mpRoomInput) mpRoomInput.value = s.mpRoom || '';
            if (mpNickInput) mpNickInput.value = s.mpNick || '';
            if (mpColorInput) mpColorInput.value = s.mpColor || '#29b6f6';
            if (mpZombiesCheckbox) mpZombiesCheckbox.checked = s.mpZombies !== false;
            if (mpFixedSpawnCheckbox) mpFixedSpawnCheckbox.checked = !!s.mpFixedSpawn;
            if (arenaTimeInput && arenaTimeVal) {
                const val = s.arenaTime || parseInt(arenaTimeInput.value, 10) || 180;
                arenaTimeInput.value = val;
                arenaTimeVal.innerText = val;
            }
            if (arenaRespawnCheckbox) arenaRespawnCheckbox.checked = s.arenaRespawn !== false;
            if (matrixInfiniteAmmoCheckbox) matrixInfiniteAmmoCheckbox.checked = s.matrixInfiniteAmmo !== false;
            if (matrixShowUICheckbox) matrixShowUICheckbox.checked = s.matrixShowUI !== false;
            if (matrixAiAutospawnCheckbox) matrixAiAutospawnCheckbox.checked = s.matrixAiAutospawn !== false;
            if (matrixAiHintsCheckbox) matrixAiHintsCheckbox.checked = s.matrixAiHints !== false;
            if (studioFlightCheckbox) studioFlightCheckbox.checked = s.studioFlight !== false;
            if (studioShowGridCheckbox) studioShowGridCheckbox.checked = s.studioShowGrid !== false;
            
            // Load Show FPS setting
            if (showFpsCheckbox) {
                showFpsCheckbox.checked = s.showFps === true;
                if (this.stats) {
                    this.stats.dom.style.display = showFpsCheckbox.checked ? 'block' : 'none';
                }
            }
        }

        // Update labels live
        bindRangeLabel(enemiesInput, enemiesVal);
        bindRangeLabel(stormInput, stormVal);
        bindRangeLabel(mapSizeInput, mapSizeVal);
        bindRangeLabel(arenaTimeInput, arenaTimeVal);
        bindRangeLabel(renderScaleInput, renderScaleVal);
        bindRangeLabel(sfxVolumeSlider, sfxVolumeVal);
        
        if (sfxVolumeSlider) {
            sfxVolumeSlider.addEventListener('change', () => {
                const vol = parseInt(sfxVolumeSlider.value, 10);
                persistSetting('sfxVolume', vol);
                const normalizedVol = vol / 100;
                
                if (this.player && typeof this.player.setSFXVolume === 'function') {
                    this.player.setSFXVolume(normalizedVol);
                }
                
                if (this.enemyManager && typeof this.enemyManager.setSFXVolume === 'function') {
                    this.enemyManager.setSFXVolume(normalizedVol);
                }
            });
        }

        if (autoPerfCheckbox) {
            autoPerfCheckbox.addEventListener('change', () => {
                const settings = this.lastPlaySettings || {};
                settings.autoPerformance = autoPerfCheckbox.checked;
                this.autoPerfEnabled = settings.autoPerformance;
                persistSetting('autoPerformance', settings.autoPerformance);
            });
        }
        if (perfModeCheckbox) {
            perfModeCheckbox.addEventListener('change', () => {
                const settings = this.lastPlaySettings || {};
                settings.performanceMode = perfModeCheckbox.checked;
                this.applyGraphicsSettings(settings);
                persistSetting('performanceMode', perfModeCheckbox.checked);
            });
        }
        
        // Debug checkbox - control dashboard visibility and processing
        if (debugCheckbox) {
            debugCheckbox.addEventListener('change', () => {
                const enabled = debugCheckbox.checked;
                persistSetting('debugMode', enabled);
                
                // Control HUD dashboard visibility and processing
                if (this.hud && typeof this.hud.setDebugEnabled === 'function') {
                    this.hud.setDebugEnabled(enabled);
                }
            });
            
            // Set initial state from settings
            const savedSettings = localStorage.getItem('voxel-firecraft-settings');
            if (savedSettings) {
                const s = JSON.parse(savedSettings);
                if (this.hud && typeof this.hud.setDebugEnabled === 'function') {
                    this.hud.setDebugEnabled(s.debugMode === true);
                }
            }
        }
        
        if (renderScaleInput) {
            renderScaleInput.addEventListener('change', () => {
                const settings = this.lastPlaySettings || {};
                settings.renderScale = parseInt(renderScaleInput.value, 10);
                this.applyGraphicsSettings(settings);
                persistSetting('renderScale', settings.renderScale);
            });
        }
        if (showHatCheckbox) {
            showHatCheckbox.addEventListener('change', () => {
                if (this.player && typeof this.player.setHatVisible === 'function') {
                    this.player.setHatVisible(showHatCheckbox.checked);
                }
                persistSetting('showHat', showHatCheckbox.checked);
            });
        }
        
        // Show FPS checkbox
        if (showFpsCheckbox) {
            showFpsCheckbox.addEventListener('change', () => {
                const show = showFpsCheckbox.checked;
                persistSetting('showFps', show);
                if (this.stats) {
                    this.stats.dom.style.display = show ? 'block' : 'none';
                }
            });
        }
        
        // Make dashboards draggable
        this.makeDashboardDraggable('dashboard');
        this.makeDashboardDraggable('perf-dashboard');

        playBtn.onclick = () => {
            const selectedMode = this._selectedMode || 'arcade';
            if (selectedMode === 'multiplayer' && this.multiplayer && !this.multiplayer.isHost && !this.multiplayer.roomSettings) {
                alert('Waiting for host settings. Please try again in a moment.');
                return;
            }
            const settings = {
                difficulty: (selectedMode === 'survival') 
                    ? (document.getElementById('setting-survival-difficulty') ? document.getElementById('setting-survival-difficulty').value : 'medium')
                    : diffSelect.value,
                enemyCount: parseInt(enemiesInput.value),
                stormTime: parseInt(stormInput.value),
                stormEnabled: stormEnabledInput ? stormEnabledInput.checked : true,
                mapSize: mapSizeInput ? parseInt(mapSizeInput.value) : DEFAULT_MAP_SIZE,
                debugMode: debugCheckbox.checked,
                showMinimap: minimapCheckbox ? minimapCheckbox.checked : true,
                musicVolume: volumeSlider ? parseInt(volumeSlider.value) : Math.round(this.bgMusicVolume * 100),
                musicEnabled: document.getElementById('setting-music-enabled') ? document.getElementById('setting-music-enabled').checked : true,
                showFps: showFpsCheckbox ? showFpsCheckbox.checked : false,
                cameraMode: cameraSelect.value,
                mouthStyle: mouthStyleSelect ? mouthStyleSelect.value : 'serious',
                showHat: showHatCheckbox ? showHatCheckbox.checked : true,
                performanceMode: perfModeCheckbox ? perfModeCheckbox.checked : false,
                autoPerformance: autoPerfCheckbox ? autoPerfCheckbox.checked : false,
                renderScale: renderScaleInput ? parseInt(renderScaleInput.value, 10) : 100,
                sfxVolume: sfxVolumeSlider ? parseInt(sfxVolumeSlider.value, 10) : 70,
                language: languageSelect ? languageSelect.value : 'en',
                useTouchControls: touchCheckbox ? touchCheckbox.checked : false,
                fullscreen: fullscreenCheckbox ? fullscreenCheckbox.checked : false,
                gameMode: selectedMode,
                openaiKey: openaiKeyInput ? openaiKeyInput.value : '',
                groqKey: groqKeyInput ? groqKeyInput.value : '',
                nvidiaKey: nvidiaKeyInput ? nvidiaKeyInput.value : '',
                mpServer: mpServerInput ? mpServerInput.value : '',
                mpSeed: mpSeedInput ? mpSeedInput.value.trim() : '',
                mpRoom: mpRoomInput ? mpRoomInput.value : '',
                mpSpawn: mpSpawnInput ? mpSpawnInput.value : '',
                mpNick: mpNickInput ? mpNickInput.value : '',
                mpColor: mpColorInput ? mpColorInput.value : '#29b6f6',
                mpZombies: mpZombiesCheckbox ? mpZombiesCheckbox.checked : true,
                mpFixedSpawn: mpFixedSpawnCheckbox ? mpFixedSpawnCheckbox.checked : false,
                arenaTime: arenaTimeInput ? parseInt(arenaTimeInput.value, 10) : 180,
                arenaRespawn: arenaRespawnCheckbox ? arenaRespawnCheckbox.checked : true,
                matrixInfiniteAmmo: matrixInfiniteAmmoCheckbox ? matrixInfiniteAmmoCheckbox.checked : true,
                matrixShowUI: matrixShowUICheckbox ? matrixShowUICheckbox.checked : true,
                matrixAiAutospawn: matrixAiAutospawnCheckbox ? matrixAiAutospawnCheckbox.checked : true,
                matrixAiHints: matrixAiHintsCheckbox ? matrixAiHintsCheckbox.checked : true,
                studioFlight: studioFlightCheckbox ? studioFlightCheckbox.checked : true,
                studioShowGrid: studioShowGridCheckbox ? studioShowGridCheckbox.checked : true
            };
            this.lastPlaySettings = settings;
            
            // Save Settings
            localStorage.setItem('voxel-firecraft-settings', JSON.stringify(settings));
            this.updateDebugToggleVisibility(settings.debugMode);
            this.applyGraphicsSettings(settings);
            
            // Hide Menu
            menu.style.display = 'none';
            this.setMenuOpenState(false);
            // Start background music (user gesture) if enabled
            if (settings.musicEnabled !== false) {
                this.playBackgroundMusic();
            } else {
                this.stopBackgroundMusic();
            }
            this.requestFullscreenIfNeeded(settings.fullscreen);
            
            const gameRunning = this.player && this.world && this.enemyManager;
            const sameMode = gameRunning && this.player && this.player.gameMode === selectedMode;
            // If another mode is running, tear down before starting new one
            if (gameRunning && !sameMode) {
                this.resetGameState();
            }

            // Resume if same mode; otherwise start fresh
            if (this.player && this.world && this.enemyManager && sameMode) {
                this.isPaused = false;
                this.clock.getDelta(); // Reset clock to prevent delta accumulation

                // Reset button text
                playBtn.innerText = 'PLAY GAME';
                
                // Lock pointer again
                if (this.player) {
                    try { this.player.lockControls(); } catch (e) {}
                }
                
                // Apply updated settings to HUD if present
                if (this.hud) {
                    this.hud.settings = settings;
                }
                if (this.world) {
                    this.world.stormEnabled = settings.stormEnabled !== false;
                    const canShowStorm = this.world.stormEnabled && this.world.gameMode !== 'matrix' && this.world.gameMode !== 'studio' && this.world.gameMode !== 'matrix-ai';
                    if (this.world.stormMesh) {
                        this.world.stormMesh.visible = canShowStorm;
                    } else if (canShowStorm && typeof this.world.createStormVisuals === 'function') {
                        this.world.createStormVisuals();
                    }
                }
                if (this.player) {
                    this.player.mouthStyle = settings.mouthStyle || 'serious';
                    if (typeof this.player.createMouth === 'function') {
                        this.player.createMouth(this.player.mouthStyle);
                    }
                }
                this.setHotbarVisible(true);
            } else {
                // Start new game
                playBtn.innerText = 'PLAY GAME';
                this.startGame(settings);
            }

            // Show hotkey hint in studio mode
            if (hotkeyHint) {
                const showHotkeys = settings && settings.gameMode === 'studio';
                hotkeyHint.classList.toggle('hidden', !showHotkeys);
            }
        };

        if (quitBtn) {
            quitBtn.onclick = () => {
                if (this.multiplayer && typeof this.multiplayer.dispose === 'function') {
                    this.multiplayer.dispose();
                }
                location.reload();
            };
        }

        if (floatBtn) floatBtn.classList.add('hidden');

        if (mpRoomGenerate && mpRoomInput) {
            mpRoomGenerate.onclick = () => {
                const code = Math.random().toString(36).substr(2, 5).toUpperCase();
                mpRoomInput.value = code;
                try {
                    const saved = JSON.parse(localStorage.getItem('voxel-firecraft-settings') || '{}');
                    saved.mpRoom = code;
                    localStorage.setItem('voxel-firecraft-settings', JSON.stringify(saved));
                } catch (e) {}
            };
        }

        // Hotkey modal handlers
        if (hotkeyHint) {
            hotkeyHint.onclick = () => this.toggleHotkeyModal(true);
        }
        if (hotkeyClose) {
            hotkeyClose.onclick = () => this.toggleHotkeyModal(false);
        }
        if (hotkeyModal) {
            hotkeyModal.addEventListener('click', (ev) => {
                if (ev.target === hotkeyModal) this.toggleHotkeyModal(false);
            });
        }

        // Volume slider live update
        if (volumeSlider) {
            volumeSlider.addEventListener('change', () => {
                const vol = parseInt(volumeSlider.value, 10);
                persistSetting('musicVolume', vol);
                // Use power curve for better volume perception
                this.bgMusicVolume = Math.pow(vol / 100, 2);
                if (this.bgMusic) {
                    this.bgMusic.volume = this.bgMusicVolume;
                }
            });
        }
        
        // Music enabled checkbox live update
        const musicEnabledCheckbox = document.getElementById('setting-music-enabled');
        if (musicEnabledCheckbox) {
            musicEnabledCheckbox.onchange = () => {
                if (musicEnabledCheckbox.checked) {
                    this.playBackgroundMusic();
                } else {
                    this.stopBackgroundMusic();
                }
            };
        }
        // Touch checkbox live update (persist immediately)
        if (touchCheckbox) {
            touchCheckbox.onchange = () => {
                try {
                    const saved = JSON.parse(localStorage.getItem('voxel-firecraft-settings') || '{}');
                    saved.useTouchControls = touchCheckbox.checked;
                    localStorage.setItem('voxel-firecraft-settings', JSON.stringify(saved));
                } catch (e) {}
            };
        }

        // Hide hotbar while menu is open
        this.setHotbarVisible(false);
        this.setMenuOpenState(true);

        // Tabs: simple show/hide panels
        const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
        const tabPanels = document.querySelectorAll('.tab-panel');
        const activateTab = (btn) => {
            if (!btn) return;
            const target = btn.getAttribute('data-tab');
            tabButtons.forEach(b => b.classList.toggle('active', b === btn));
            tabPanels.forEach(p => {
                if (p.id === target) p.classList.remove('hidden');
                else p.classList.add('hidden');
            });
            const mode = btn.getAttribute('data-mode');
            if (mode && gameModeSelect) {
                gameModeSelect.value = mode;
                if (activeModeLabel) activeModeLabel.innerText = btn.innerText;
                if (activeModeChip) activeModeChip.innerText = btn.innerText;
            }
            if (mode) this._selectedMode = mode;
        };
        tabButtons.forEach(btn => btn.addEventListener('click', () => activateTab(btn)));

        // Restore tab from saved game mode or keep first as default
        const savedMode = this._selectedMode || (gameModeSelect ? gameModeSelect.value : null);
        const savedBtn = savedMode ? tabButtons.find(b => b.getAttribute('data-mode') === savedMode) : null;
        const defaultBtn = savedBtn || tabButtons.find(b => b.classList.contains('active')) || tabButtons[0];
        activateTab(defaultBtn);
    }

    resetGameState() {
        // Dispose multiplayer client if active
        if (this.multiplayer && typeof this.multiplayer.resetMatchState === 'function') {
            this.multiplayer.resetMatchState();
        }
        if (this.multiplayer && typeof this.multiplayer.dispose === 'function') {
            try { this.multiplayer.dispose(); } catch (e) { console.warn('Dispose multiplayer failed:', e); }
        }
        this.multiplayer = null;
        this.multiplayerEnemyBaseCount = 0;
        this.multiplayerDropTimer = 0;
        this.multiplayerDropCooldown = 0;
        this.multiplayerDropActive = false;
        this.matchPhase = 'live';
        this.lobbyCountdown = 0;
        this.isPaused = false;
        this.forceFixedMultiplayerSpawn = false;
        this.matchSettings = null;

        // Clear scene objects and re-add default lighting
        try {
            this.scene.clear();
        } catch (e) { console.warn('Scene clear failed:', e); }
        try {
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            this.scene.add(ambientLight);
            const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
            dirLight.position.set(50, 100, 50);
            dirLight.castShadow = true;
            dirLight.shadow.camera.left = -100;
            dirLight.shadow.camera.right = 100;
            dirLight.shadow.camera.top = 100;
            dirLight.shadow.camera.bottom = -100;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 160;
            dirLight.shadow.mapSize.width = 1024;
            dirLight.shadow.mapSize.height = 1024;
            this.scene.add(dirLight);
        } catch (e) { console.warn('Rebuild lights failed:', e); }

        // Reset core references
        this.player = null;
        this.world = null;
        this.enemyManager = null;
        this.itemManager = null;
        this.hud = null;
        this.matchSettings = null;
        this.lastPlaySettings = null;
        // Restore default RNG
        Math.random = this._defaultRandom;
        this._currentRandomSeed = null;
        if (this.multiplayer && typeof this.multiplayer.resetMatchState === 'function') {
            this.multiplayer.resetMatchState();
        }
    }

    startGame(settings) {
        // Components
        // 1. Player (initially without world objects)
        this.clearAiObjects();
        this.multiplayerDropTimer = 0;
        this.multiplayerDropCooldown = 0;
        this.multiplayerDropActive = false;
        this.matchPhase = 'live';
        this.lobbyCountdown = 0;
        this.victoryShown = false;
        const effectiveSettings = { ...settings };
        this.forceFixedMultiplayerSpawn = effectiveSettings.gameMode === 'multiplayer' ? !!settings.mpFixedSpawn : false;
        // Harmonize multiplayer settings (map size/seed/enemies) so all clients share the same world
        if (effectiveSettings.gameMode === 'multiplayer') {
            const hostSettings = (this.multiplayer && !this.multiplayer.isHost && this.multiplayer.roomSettings) ? this.multiplayer.roomSettings : null;
            if (!this.multiplayer || this.multiplayer.isHost || !hostSettings) {
                const seed = settings.mpSeed || Math.random().toString(36).slice(2);
                this.matchSettings = {
                    mapSize: settings.mapSize,
                    enemyCount: settings.enemyCount,
                    stormEnabled: false,
                    seed,
                    fixedSpawn: !!settings.mpFixedSpawn
                };
            } else {
                this.matchSettings = hostSettings;
            }
            if (this.matchSettings) {
                effectiveSettings.mapSize = this.matchSettings.mapSize;
                effectiveSettings.enemyCount = this.matchSettings.enemyCount;
                effectiveSettings.stormEnabled = this.matchSettings.stormEnabled;
                this.forceFixedMultiplayerSpawn = !!this.matchSettings.fixedSpawn;
                this.applyDeterministicRandom(this.matchSettings.seed || 'mp-seed');
            }
        }
        if (effectiveSettings.gameMode === 'matrix' || effectiveSettings.gameMode === 'studio') {
            effectiveSettings.enemyCount = 0;
            effectiveSettings.skipLoot = true;
        }
        if (effectiveSettings.gameMode === 'multiplayer') {
            effectiveSettings.skipLoot = true;
            effectiveSettings.stormEnabled = false;
            if (settings.mpZombies === false) {
                effectiveSettings.enemyCount = 0;
            }
        }
        if (effectiveSettings.gameMode === 'survival') {
            effectiveSettings.stormEnabled = false;
            effectiveSettings.mapSize = Math.max(100, effectiveSettings.mapSize);
        }
        
        // Initialize survival timer
        this.survivalStartTime = performance.now();
        this.survivalTime = 0;
        
        // Track loot drops for survival mode
        this.lootDropEligible = false;
        this.lootDropCooldown = 0;
        
        this.multiplayerEnemyBaseCount = effectiveSettings.enemyCount || 0;
        this.player = new Player(this.camera, this.scene, null, effectiveSettings);
        if (typeof settings.sfxVolume !== 'undefined') {
            this.player.sfxVolume = Math.max(0, Math.min(1, settings.sfxVolume / 100));
        }
        // Apply multiplayer color to local player mesh
        if (settings && settings.mpColor) {
            this.player.playerColor = settings.mpColor;
            // Recreate mesh with new color if needed
            if (this.player.mesh) {
                try {
                    this.scene.remove(this.player.mesh);
                } catch (e) {}
            }
            this.player.createPlayerMesh();
        }
        // Apply hat/mouth settings to local player mesh
        if (this.player) {
            this.player.setHatVisible(settings.showHat !== false);
            this.player.mouthStyle = settings.mouthStyle || 'serious';
            this.player.createMouth(this.player.mouthStyle);
        }
        if (effectiveSettings.gameMode === 'multiplayer') {
            this.matchPhase = 'lobby';
            if (this.multiplayer) this.multiplayer.matchLive = false;
        } else {
            this.matchPhase = 'live';
        }
            
            // 2. ItemManager (needs player)
            this.itemManager = new ItemManager(this.scene, this.player, effectiveSettings);
        
        // 3. World (needs itemManager)
        this.world = new World(this.scene, this.itemManager, effectiveSettings);
        
        // 4. Update Player with World Objects
        this.player.worldObjects = this.world.objects;
        this.player.world = this.world;
        if (this.itemManager && typeof this.itemManager.setWorld === 'function') {
            this.itemManager.setWorld(this.world);
        }
        const lobbyUi = document.getElementById('mp-lobby');
        const lobbyBtn = document.getElementById('mp-start-btn');
        if (lobbyUi) lobbyUi.classList.add('hidden');
        if (lobbyBtn) lobbyBtn.classList.add('hidden');

        // Matrix mode: spawn all items near player for quick testing
        if (effectiveSettings.gameMode === 'matrix' && this.itemManager && typeof this.itemManager.spawnMatrixLoadout === 'function') {
            this.itemManager.spawnMatrixLoadout(this.player.position.x, this.player.position.z);
        }
        // Multiplayer: randomize spawn away from others
        if (effectiveSettings.gameMode === 'multiplayer') {
            // If custom spawn is provided and DEBUG_STATIC_TEST is active, spawn there directly
            if (window.DEBUG_STATIC_TEST && settings.mpSpawn) {
                const parts = settings.mpSpawn.split(',').map(s => parseFloat(s.trim()));
                if (parts.length === 3 && parts.every(n => !isNaN(n))) {
                    console.log('[MAIN] Setting initial spawn to custom position:', parts);
                    this.player.mesh.position.set(parts[0], parts[1], parts[2]);
                    this.player.debugSpawnY = parts[1]; // Store Y for locking
                }
            } else if (!window.DEBUG_STATIC_TEST) {
                // Normal mode: randomize spawn
                this.assignMultiplayerSpawn();
            }
            // In DEBUG_STATIC_TEST without custom spawn, leave at (0,0,0) - server will handle
        }
        // Multiplayer client setup
        if (effectiveSettings.gameMode === 'multiplayer') {
            this.multiplayer = new MultiplayerClient({
                player: this.player,
                scene: this.scene,
                url: settings.mpServer,
                nick: settings.mpNick || 'Player',
                color: settings.mpColor || '#29b6f6',
                roomCode: settings.mpRoom || 'PUBLIC',
                settings: this.matchSettings,
                customSpawn: settings.mpSpawn || null
            });
                if (!settings.mpServer) {
                    alert('Multiplayer server URL not set. Please configure it in the Multiplayer tab.');
                }
                if (this.player && typeof this.player.setMultiplayerClient === 'function') {
                    this.player.setMultiplayerClient(this.multiplayer);
                }
                if (this.multiplayer) {
                    this.multiplayer.onPeersChanged = () => this.refreshMultiplayerTargets();
                    this.multiplayer.roomCode = settings.mpRoom || 'PUBLIC';
                    this.multiplayer.onHostChanged = (isHost) => {
                        this.updateLobbyUI(isHost);
                        if (isHost && this.matchSettings) {
                            this.multiplayer.sendSettings(this.matchSettings);
                        }
                    };
                    this.multiplayer.onCountdown = (duration) => this.beginLobbyCountdown(duration);
                    this.multiplayer.onMatchStart = () => this.startMultiplayerMatch();
                    this.multiplayer.onSettings = (roomSettings) => {
                        this.matchSettings = roomSettings;
                        // If we are not host and already running with different settings, restart to host settings
                        const isHost = this.multiplayer && this.multiplayer.isHost;
                        const runningMp = this.player && this.player.gameMode === 'multiplayer';
                        const needsRestart = runningMp && roomSettings && (
                            (this.world && this.world.mapSize !== roomSettings.mapSize) ||
                            (this.multiplayerEnemyBaseCount !== roomSettings.enemyCount)
                        );
                        if (!isHost && roomSettings && needsRestart && this.lastPlaySettings) {
                            const merged = { ...this.lastPlaySettings, mapSize: roomSettings.mapSize, enemyCount: roomSettings.enemyCount };
                            this.resetGameState();
                            this.matchSettings = roomSettings;
                            this.applyDeterministicRandom(roomSettings.seed || 'mp-seed');
                            this.startGame(merged);
                        }
                    };
                        if (this.multiplayer.isHost && this.matchSettings) {
                            this.multiplayer.sendSettings(this.matchSettings);
                        }
                    this.multiplayer.onPeerDeath = () => {
                        this.checkMultiplayerVictory();
                    };
                    // In case the welcome/host flag arrived before callbacks were set, refresh the UI now
                    this.updateLobbyUI(this.multiplayer.isHost);
                    // If host, rebroadcast settings including fixed spawn flag
                    if (this.multiplayer.isHost && this.matchSettings) {
                        this.multiplayer.sendSettings(this.matchSettings);
                    }
                }
            } else {
                this.multiplayer = null;
        }
        // AI Builder mode: no enemies/loot, show AI panel
        if (effectiveSettings.gameMode === 'matrix-ai') {
            effectiveSettings.enemyCount = 0;
            effectiveSettings.skipLoot = true;
            const panel = document.getElementById('ai-panel');
            if (panel) panel.classList.remove('hidden');
        } else {
            const panel = document.getElementById('ai-panel');
            if (panel) panel.classList.add('hidden');
        }

        this.hud = new HUD(this.player, this.world, settings);
        if (this.player) this.player.hud = this.hud;
        this.hud.setRenderer(this.renderer);
        if (this.multiplayer) this.hud.setMultiplayer(this.multiplayer);
        
        // Set initial dashboard visibility based on debug mode setting
        if (this.hud && typeof this.hud.setDebugEnabled === 'function') {
            const debugEnabled = settings.debugMode === true;
            this.hud.setDebugEnabled(debugEnabled);
        }
        this.enemyManager = new EnemyManager(this.scene, this.player, this.world, effectiveSettings);
        if (this.multiplayer && typeof this.multiplayer.setEnemyManager === 'function') {
            this.multiplayer.setEnemyManager(this.enemyManager);
        }
        if (effectiveSettings.gameMode === 'multiplayer') {
            this.multiplayerEnemyBaseCount = effectiveSettings.enemyCount || 0;
            if (typeof this.enemyManager.setTargetCount === 'function') {
                this.enemyManager.setTargetCount(this.multiplayerEnemyBaseCount);
            }
            // Hook server hit confirmation handler
            if (this.multiplayer) {
                // REMOVED: Old direct hit handler (now deprecated)
                // Damage is now applied via hit-confirm in multiplayerClient.js
                this.multiplayer.onHit = (payload) => {
                    console.warn('[DEPRECATED] Direct hit message received, ignoring');
                };

                // NEW: Handle authoritative server hit confirmations
                this.multiplayer.onHitConfirm = (data) => {
                    console.log(`[HIT CONFIRMED] ${data.shooterId} -> ${data.targetId} [${data.damage} dmg, ${data.weapon}]${data.isDead ? ' [KILL]' : ''}`);
                    // Damage already applied in multiplayerClient.js handler
                    // Could add kill feed UI here
                };
            }
        }
        
        // Give player reference to enemies for shooting
        this.player.setEnemyManager(this.enemyManager);
        if (effectiveSettings.gameMode === 'multiplayer') {
            this.refreshMultiplayerTargets();
            this.setupMultiplayerLobbyUI();
        }
            // Enable click-to-identify in arcade style
        this.setupObjectInspector();
        // Hide DBG button when debug mode is off
        this.updateDebugToggleVisibility(!!settings.debugMode);
        // Show hotbar in-game
        this.setHotbarVisible(true);

        // Setup float toggle for Studio
        const floatBtn = document.getElementById('float-btn');
        if (floatBtn) {
            if (effectiveSettings.gameMode === 'studio') {
                floatBtn.classList.remove('hidden');
                floatBtn.innerText = this.player.isFloating ? 'FLOAT ON' : 'FLOAT OFF';
                floatBtn.onclick = () => {
                    this.player.isFloating = !this.player.isFloating;
                    if (!this.player.isFloating) {
                        // snap to ground when turning off
                        const y = this.player.getSurfaceHeight(this.player.position.x, this.player.position.z);
                        this.player.mesh.position.y = y;
                        this.player.velocity.y = 0;
                    }
                    floatBtn.innerText = this.player.isFloating ? 'FLOAT ON' : 'FLOAT OFF';
                };
            } else {
                floatBtn.classList.add('hidden');
            }
        }

        // Hide storm timer when storm disabled or non-storm modes
        const stormTimer = document.getElementById('storm-timer');
        if (stormTimer) {
            const hide = effectiveSettings.stormEnabled === false || effectiveSettings.gameMode === 'studio' || effectiveSettings.gameMode === 'matrix' || effectiveSettings.gameMode === 'matrix-ai' || effectiveSettings.gameMode === 'multiplayer' || effectiveSettings.gameMode === 'survival';
            stormTimer.classList.toggle('hidden', hide);
        }
        
        // Show survival timer in arcade and survival modes
        const survivalTimer = document.getElementById('survival-timer');
        if (survivalTimer) {
            const show = effectiveSettings.gameMode === 'arcade' || effectiveSettings.gameMode === 'survival';
            survivalTimer.classList.toggle('hidden', !show);
        }

        // Event Listeners
        window.addEventListener('resize', () => this.onWindowResize(), false);
        // Allow re-locking pointer via canvas click if needed (desktop)
        const canvas = this.renderer.domElement;
        canvas.addEventListener('pointerdown', () => {
            if (IS_MOBILE) return;
            try {
                const menuVisible = document.getElementById('main-menu') && document.getElementById('main-menu').style.display !== 'none';
                const isStudio = this.player && this.player.gameMode === 'studio';
                if (this.isPaused || menuVisible || isStudio) return;
                if (this.player && !this.player.isDead) {
                    this.player.lockControls();
                }
            } catch (e) { console.warn('Pointer lock request skipped or failed:', e); }
            // Also nudge background audio in case autoplay was blocked
            if (this.bgAudio && this.bgAudio.paused) {
                this.playBackgroundMusic();
            }
        });

        // Setup pause menu buttons
        this.setupPauseMenu();

        // Touch controls: detect mobile or respect user setting
        try {
            const isMobileUA = typeof navigator !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
            const coarsePointer = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
            const wantTouch = !!settings.useTouchControls || isMobileUA || coarsePointer;
            if (wantTouch) {
                this.touchControls = new TouchControls(this.player);
            }
        } catch (e) {}

        // Studio palette
        this.setupStudioPalette(effectiveSettings);
        this.refreshStudioPaletteVisibility();
        this.setupAiPanel();

        // Lock pointer immediately after Play click (desktop)
        if (!IS_MOBILE && this.player && this.player.controls && !this.player.controls.isLocked) {
            try {
                this.player.lockControls();
            } catch (e) { console.warn('Pointer lock on start skipped/failed:', e); }
        }

        if (!this._animationStarted) {
            this._animationStarted = true;
            this.animate();
        }
    }

    setupLongPressMenu() {
        if (!IS_MOBILE) return;
        const target = document.getElementById('ui-layer') || document.body;
        if (!target) return;
        const start = (ev) => {
            try {
                if (ev.touches && ev.touches.length > 1) return;
                if (this._longPressTimer) clearTimeout(this._longPressTimer);
                this._longPressTimer = setTimeout(() => {
                    this._longPressTimer = null;
                    this.showPauseMenu();
                }, 800);
            } catch (e) {}
        };
        const clear = () => {
            if (this._longPressTimer) {
                clearTimeout(this._longPressTimer);
                this._longPressTimer = null;
            }
        };
        target.addEventListener('touchstart', start, { passive: true });
        target.addEventListener('touchend', clear);
        target.addEventListener('touchcancel', clear);
        target.addEventListener('touchmove', clear);
    }

    setupAiPanel() {
        const panel = document.getElementById('ai-panel');
        const sendBtn = document.getElementById('ai-send');
        const promptEl = document.getElementById('ai-prompt');
        const logEl = document.getElementById('ai-log');
        const providerEl = document.getElementById('ai-provider');
        if (!panel || !sendBtn || !promptEl || !logEl) return;

        const appendLog = (text, cls = '') => {
            const div = document.createElement('div');
            div.textContent = text;
            if (cls) div.className = cls;
            logEl.appendChild(div);
            logEl.scrollTop = logEl.scrollHeight;
        };

        sendBtn.onclick = () => {
            const val = promptEl.value.trim();
            if (!val) return;
            appendLog(`You: ${val}`, 'ai-user');
            // Stubbed AI response
            appendLog('AI: (stub) Interpreter not wired. Imagine this runs your Three.js code.', 'ai-bot');
            promptEl.value = '';
        };

        const systemPrompt = `You are a level-building assistant for a Three.js sandbox. Respond ONLY with a JSON object:
{
  "actions": [
    {
      "action": "add",
      "type": "box" | "sphere" | "cylinder" | "plane",
      "pos": [x,y,z],
      "size": [sx,sy,sz],
      "color": "#rrggbb"
    }
  ]
}
Constraints: numbers are in meters, keep |x|,|z| <= 150, size in [0.2, 40]. No functions, no code, no prose, no markdown.`;

        const callOpenAI = async (userText) => {
            const keyInput = document.getElementById('setting-openai-key');
            const apiKey = keyInput && keyInput.value ? keyInput.value.trim() : '';
            if (!apiKey) {
                appendLog('Erro: configure a chave OpenAI em Settings.', 'ai-error');
                return '';
            }
            const body = {
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userText }
                ],
                temperature: 0.2,
                max_tokens: 2000,
                response_format: { type: 'json_object' }
            };
            const resp = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                },
                body: JSON.stringify(body)
            });
            if (!resp.ok) {
                const errText = await resp.text();
                appendLog(`Erro OpenAI: ${resp.status} ${errText}`, 'ai-error');
                return '';
            }
            const json = await resp.json();
            const answer = json && json.choices && json.choices[0] && json.choices[0].message ? json.choices[0].message.content : '';
            appendLog(`AI: ${answer || '(vazio)'}`, 'ai-bot');
            return answer || '';
        };

        sendBtn.onclick = async () => {
            const val = promptEl.value.trim();
            if (!val) return;
            appendLog(`You: ${val}`, 'ai-user');
            promptEl.value = '';
            const provider = providerEl ? providerEl.value : 'openai';
            sendBtn.disabled = true;
            sendBtn.innerText = 'Enviando...';
            try {
                if (provider === 'openai') {
                    const answer = await callOpenAI(val);
                    if (answer) {
                        const actions = this.parseAiActions(answer, appendLog);
                        if (actions && actions.length) {
                            const applied = this.applyAiActions(actions, appendLog);
                            appendLog(`Aplicado: ${applied} objeto(s)`, 'ai-info');
                        }
                    }
                } else {
                    appendLog(`Provider ${provider} não suportado.`, 'ai-error');
                }
            } catch (err) {
                appendLog(`Erro na requisição: ${err.message || err}`, 'ai-error');
            } finally {
                sendBtn.disabled = false;
                sendBtn.innerText = 'Send to AI';
            }
        };
    }

    parseAiActions(answer, log) {
        const logger = log || (() => {});
        let data = null;
        try {
            data = JSON.parse(answer);
        } catch (e) {
            logger('Falha ao parsear JSON da AI.', 'ai-error');
            return [];
        }
        if (data && data.actions && Array.isArray(data.actions)) {
            data = data.actions;
        }
        if (!Array.isArray(data)) {
            logger('Resposta não é uma lista de ações.', 'ai-error');
            return [];
        }
        const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
        const allowedTypes = new Set(['box', 'sphere', 'cylinder', 'plane']);
        const colorRe = /^#([0-9a-fA-F]{6})$/;
        const maxObjects = this.aiMaxAiObjects || 200;
        const result = [];
        for (const item of data) {
            if (!item || item.action !== 'add') continue;
            if (!allowedTypes.has(item.type)) continue;
            const pos = Array.isArray(item.pos) ? item.pos.slice(0, 3) : [0, 0, 0];
            const size = Array.isArray(item.size) ? item.size.slice(0, 3) : [1, 1, 1];
            const normPos = [
                clamp(Number(pos[0] ?? 0), -150, 150),
                clamp(Number(pos[1] ?? 0), -10, 200),
                clamp(Number(pos[2] ?? 0), -150, 150)
            ];
            const normSize = [
                clamp(Math.abs(Number(size[0] ?? 1)), 0.2, 40),
                clamp(Math.abs(Number(size[1] ?? 1)), 0.2, 40),
                clamp(Math.abs(Number(size[2] ?? 1)), 0.2, 40)
            ];
            const color = typeof item.color === 'string' && colorRe.test(item.color) ? item.color : '#cccccc';
            result.push({ type: item.type, pos: normPos, size: normSize, color });
            if (result.length >= maxObjects) break;
        }
        if (!result.length) logger('Nenhuma ação válida na resposta.', 'ai-error');
        return result;
    }

    clearAiObjects() {
        if (!this.aiObjects) this.aiObjects = [];
        this.aiObjects.forEach((obj) => {
            try {
                if (obj.parent) obj.parent.remove(obj);
                if (obj.geometry && obj.geometry.dispose) obj.geometry.dispose();
                if (obj.material && obj.material.dispose) obj.material.dispose();
            } catch (e) {}
        });
        this.aiObjects = [];
    }

    applyAiActions(actions, log) {
        const logger = log || (() => {});
        if (!actions || !actions.length) return 0;
        if (!this.scene || !this.player || this.player.gameMode !== 'matrix-ai') {
            logger('Ações ignoradas: não está no modo Matrix AI Builder.', 'ai-error');
            return 0;
        }
        // Reset previous builds
        this.clearAiObjects();
        const maxTotal = this.aiMaxAiObjects || 200;
        const created = [];
        const lightDir = new THREE.DirectionalLight(0xffffff, 0.2);
        lightDir.position.set(0, 10, 0);
        this.scene.add(lightDir);
        created.push(lightDir);

        actions.slice(0, maxTotal).forEach((a) => {
            try {
                let geom = null;
                const mat = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(a.color),
                    metalness: 0.05,
                    roughness: 0.85
                });
                if (a.type === 'box') {
                    geom = new THREE.BoxGeometry(a.size[0], a.size[1], a.size[2]);
                } else if (a.type === 'sphere') {
                    const r = a.size[0] / 2;
                    geom = new THREE.SphereGeometry(r, 20, 16);
                } else if (a.type === 'cylinder') {
                    const r = a.size[0] / 2;
                    geom = new THREE.CylinderGeometry(r, r, a.size[1], 16);
                } else if (a.type === 'plane') {
                    geom = new THREE.PlaneGeometry(a.size[0], a.size[2]);
                }
                if (!geom) return;
                const mesh = new THREE.Mesh(geom, mat);
                mesh.position.set(a.pos[0], a.pos[1], a.pos[2]);
                if (a.type === 'plane') mesh.rotation.x = -Math.PI / 2;
                this.scene.add(mesh);
                created.push(mesh);
            } catch (e) { logger('Falha ao criar objeto: ' + e.message, 'ai-error'); }
        });
        this.aiObjects = created;
        return created.length;
    }

    refreshStudioPaletteVisibility() {
        const palette = document.getElementById('studio-palette');
        if (!palette) return;
        const show = this.player && this.player.gameMode === 'studio' && !this.isPaused;
        palette.classList.toggle('hidden', !show);
    }

    refreshMultiplayerTargets() {
        if (!this.player || this.player.gameMode !== 'multiplayer' || !this.enemyManager) return;
        const base = typeof this.multiplayerEnemyBaseCount === 'number' ? this.multiplayerEnemyBaseCount : this.enemyManager.enemies.length;
        if (this.matchPhase === 'live' && typeof this.enemyManager.setTargetCount === 'function') {
            this.enemyManager.setTargetCount(base);
        } else if (this.matchPhase !== 'live' && typeof this.enemyManager.setTargetCount === 'function') {
            this.enemyManager.setTargetCount(0);
        }
    }

    setupStudioPalette(settings) {
        const palette = document.getElementById('studio-palette');
        if (!palette) return;
        const isStudio = settings && (settings.gameMode === 'studio' || settings.gameMode === 'matrix-ai');
        palette.classList.toggle('hidden', !isStudio);
        if (!isStudio) return;

        // Enable dragging to avoid overlap with touch controls
        this.initStudioPaletteDrag(palette);

        // Bind all palette buttons (prefab + resume)
        const buttons = palette.querySelectorAll('button');
        buttons.forEach(btn => {
            if (btn._boundStudio) return;
            btn._boundStudio = true;
            const handler = (ev) => {
                if (ev && ev.stopPropagation) ev.stopPropagation();
                if (!this.player || !this.world) return;
                const action = btn.getAttribute('data-action');
                if (action === 'resume') {
                    this.isPaused = false;
                    if (this.player && this.player.controls && !this.player.controls.isLocked) {
                        try { this.player.lockControls(); } catch (e) {}
                    }
                    const menu = document.getElementById('main-menu');
                    if (menu) menu.style.display = 'none';
                    this.setMenuOpenState(false);
                    this.setHotbarVisible(true);
                    // Hide palette so clicks go back to canvas; reopen with ESC if needed
                    try { palette.classList.add('hidden'); } catch (e) {}
                    // Clear any pending studio placement so clicks won't place until reselected
                    this.studioSelectedPrefab = null;
                    this.studioSelectedOptions = null;
                    this.toggleTouchLookArea(true);
                    if (this.player && this.player.studioSelectionHelper) {
                        try { this.player.scene.remove(this.player.studioSelectionHelper); } catch (e) {}
                        this.player.studioSelectionHelper = null;
                    }
                    this.refreshStudioPaletteVisibility();
                    if (this.bgAudio && this.bgAudio.paused) this.playBackgroundMusic();
                    return;
                } else if (action === 'float-toggle') {
                    if (this.player && this.player.gameMode === 'studio') {
                        this.player.isFloating = !this.player.isFloating;
                        const btnLabel = this.player.isFloating ? 'FLOAT ON' : 'FLOAT OFF';
                        btn.innerText = btnLabel;
                        if (!this.player.isFloating) {
                            // snap to ground when turning off
                            const y = this.player.getSurfaceHeight(this.player.position.x, this.player.position.z);
                            this.player.mesh.position.y = y;
                            this.player.velocity.y = 0;
                        }
                    }
                    return;
                } else if (action === 'spawn-npc') {
                    // Select NPC tool for placement
                    const npcType = btn.getAttribute('data-npc-type') || 'normal';
                    this.studioSelectedPrefab = 'npc';
                    this.studioSelectedOptions = { type: npcType };
                    
                    // Hide look area
                    this.toggleTouchLookArea(false);
                    
                    // Close submenu
                    const menu = document.getElementById('npc-menu');
                    if (menu) menu.classList.add('hidden');
                    
                    return;
                } else if (action === 'remove-npc') {
                    // Toggle NPC removal mode
                    this.studioRemoveNPCMode = !this.studioRemoveNPCMode;
                    this.studioMoveMode = false; // Disable move mode
                    btn.style.background = this.studioRemoveNPCMode ? '#e74c3c' : '';
                    btn.textContent = this.studioRemoveNPCMode ? 'Remove NPC (Active)' : 'Remove NPC';
                    
                    // Clear any other studio selection
                    if (this.studioRemoveNPCMode) {
                        this.studioSelectedPrefab = null;
                        this.studioSelectedOptions = null;
                        if (this.player && this.player.studioSelectionHelper) {
                            try { this.player.scene.remove(this.player.studioSelectionHelper); } catch (e) {}
                            this.player.studioSelectionHelper = null;
                        }
                    }
                    return;
                } else if (action === 'move-tool') {
                    // Toggle Move Mode
                    this.studioMoveMode = !this.studioMoveMode;
                    this.studioRemoveNPCMode = false; // Disable remove mode
                    btn.style.background = this.studioMoveMode ? '#3498db' : '';
                    btn.textContent = this.studioMoveMode ? 'Move Tool (Active)' : 'Move Tool';
                    
                    // Clear other selections
                    if (this.studioMoveMode) {
                        this.studioSelectedPrefab = null;
                        this.studioSelectedOptions = null;
                        this.toggleTouchLookArea(false); // Disable look area to allow dragging
                    } else {
                        this.toggleTouchLookArea(true);
                        // Clear selection highlight when deactivating
                        if (this.player && typeof this.player.setStudioSelection === 'function') {
                            this.player.setStudioSelection(null);
                        }
                    }
                    return;
                } else if (action === 'drops') {
                } else if (action === 'drops') {
                    this.spawnStudioDrops();
                    return;
                } else if (action === 'menu') {
                    this.showPauseMenu();
                    return;
                } else if (action === 'quit') {
                    try { localStorage.removeItem('voxel-firecraft-settings'); } catch (e) {}
                    location.reload();
                    return;
                }
                const prefab = btn.getAttribute('data-prefab');
                const vehicleType = btn.getAttribute('data-vehicle-type');
                const treeType = btn.getAttribute('data-tree-type');
                const submenuTarget = btn.getAttribute('data-submenu');
                if (submenuTarget) {
                    const menu = document.getElementById(submenuTarget);
                    if (menu) menu.classList.toggle('hidden');
                    return;
                }
                // Mark active selection for click-to-place
                this.studioSelectedPrefab = prefab;
                this.studioSelectedOptions = vehicleType ? { variant: vehicleType } : (treeType ? { variant: treeType } : {});
                // Hide look area so touches on the world are not intercepted
                this.toggleTouchLookArea(false);
                // Close any submenu
                if (submenuTarget) {
                    const menu = document.getElementById(submenuTarget);
                    if (menu) menu.classList.add('hidden');
                }
            };
            const safeHandler = (e) => { e && e.preventDefault && e.preventDefault(); handler(e); };
            // Use pointerdown only to avoid double-fire on touch (click is redundant on touch devices)
            btn.addEventListener('pointerdown', safeHandler);
            btn.addEventListener('click', (e) => { e && e.preventDefault && e.preventDefault(); handler(e); });
        });

        // Minimize button handler
        const minBtn = document.getElementById('studio-minimize-btn');
        if (minBtn) {
            minBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const grid = document.querySelector('#studio-palette .palette-grid');
                if (grid) {
                    grid.classList.toggle('hidden');
                    minBtn.textContent = grid.classList.contains('hidden') ? '+' : '_';
                }
            });
        }
    }

    setupObjectInspector() {
        const canvas = this.renderer ? this.renderer.domElement : null;
        if (!canvas) return;

        // Remove previous handler if reusing the same canvas
        if (this._objectClickHandler && this._objectClickTarget) {
            try {
                this._objectClickTarget.removeEventListener('click', this._objectClickHandler);
                this._objectClickTarget.removeEventListener('pointerdown', this._objectClickHandler);
            } catch (e) {}
        }
        this._objectClickTarget = canvas;

        // Studio Drag & Drop Logic
        const onPointerDown = (event) => {
            // Selection highlight works in any studio mode click
            if (this.player && this.player.gameMode === 'studio') {
                const rect = canvas.getBoundingClientRect();
                const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                const ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
                const ray = new THREE.Raycaster();
                ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
                
                // Check all scene objects (including NPCs which are added directly to scene)
                let hitObj = null;
                const allObjects = [];
                
                // Add world objects
                if (this.world && this.world.objects) {
                    allObjects.push(...this.world.objects);
                }
                
                // Add NPC meshes directly
                if (this.enemyManager && this.enemyManager.enemies) {
                    console.log('[DEBUG] Enemies in scene:', this.enemyManager.enemies.map(e => e.mesh?.userData?.gameName || 'Unknown'));
                    for (const enemy of this.enemyManager.enemies) {
                        if (enemy.mesh) {
                            allObjects.push(enemy.mesh);
                        }
                    }
                }
                
                // Perform raycast on all objects
                const hits = ray.intersectObjects(allObjects, true);
                console.log('[DEBUG] Raycast hits:', hits.length, 'objects. Checking each hit...');
                
                for (const hit of hits) {
                    let obj = hit.object;
                    console.log('[DEBUG] Hit object:', obj.type, obj.userData);
                    
                    // Find root object by going up the hierarchy
                    while (obj.parent && obj.parent.type !== 'Scene') {
                        obj = obj.parent;
                    }
                    
                    console.log('[DEBUG] Root object:', obj.type, obj.userData);
                    
                    // Skip ground
                    if (obj.userData && obj.userData.gameName === 'Ground') {
                        console.log('[DEBUG] Skipping ground');
                        continue;
                    }
                    
                    // Found a valid object
                    if (obj.userData && (obj.userData.isNPC || obj.userData.gameName)) {
                        console.log('[DEBUG] FOUND VALID OBJECT!', obj.userData.gameName, 'isNPC:', obj.userData.isNPC);
                        hitObj = obj;
                        break;
                    } else {
                        console.log('[DEBUG] Object has no valid userData, skipping');
                    }
                }
                
                if (hitObj) {
                    console.log('[DEBUG] Setting selection for:', hitObj.userData.gameName);
                    // Set selection highlight
                    if (this.player && typeof this.player.setStudioSelection === 'function') {
                        this.player.setStudioSelection(hitObj);
                        console.log('[DEBUG] setStudioSelection called successfully');
                    }
                } else {
                    // Clear selection if clicked on empty space
                    if (this.player && typeof this.player.setStudioSelection === 'function') {
                        this.player.setStudioSelection(null);
                    }
                }
            }
            
            // Move Tool drag functionality (only when Move Tool is active)
            if (!this.studioMoveMode || this.player.gameMode !== 'studio') return;
            
            const rect = canvas.getBoundingClientRect();
            const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
            const ray = new THREE.Raycaster();
            ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
            
            // Check NPCs
            let hitObj = null;
            if (this.enemyManager && this.enemyManager.enemies) {
                for (const enemy of this.enemyManager.enemies) {
                    if (enemy.mesh) {
                        const hits = ray.intersectObject(enemy.mesh, true);
                        if (hits.length > 0) {
                            hitObj = enemy.mesh;
                            // Find root mesh if hit child
                            while(hitObj.parent && hitObj.parent.type !== 'Scene') {
                                hitObj = hitObj.parent;
                            }
                            break;
                        }
                    }
                }
            }
            
            // Check World Objects if no NPC hit
            if (!hitObj) {
                const hits = ray.intersectObjects(this.world.objects, true);
                for (const h of hits) {
                    if (h.object.userData && h.object.userData.gameName !== 'Ground') {
                        hitObj = h.object;
                         // Find root object
                        while(hitObj.parent && hitObj.parent.type !== 'Scene') {
                            hitObj = hitObj.parent;
                        }
                        break;
                    }
                }
            }
            
            if (hitObj) {
                this.studioDraggedObject = hitObj;
                this.studioIsDragging = true;
                if (this.player.controls) this.player.controls.enabled = false; // Disable camera
                
                // Add selection highlight
                if (this.player && typeof this.player.setStudioSelection === 'function') {
                    this.player.setStudioSelection(hitObj);
                }
            }
        };

        const onPointerMove = (event) => {
            if (!this.studioIsDragging || !this.studioDraggedObject) return;
            
            const rect = canvas.getBoundingClientRect();
            const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
            const ray = new THREE.Raycaster();
            ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
            
            const hits = ray.intersectObjects(this.world.objects, true);
            for (const h of hits) {
                if (h.object.userData && h.object.userData.gameName === 'Ground') {
                    // Move object to new position
                    this.studioDraggedObject.position.x = h.point.x;
                    this.studioDraggedObject.position.z = h.point.z;
                    
                    // Update Y based on terrain
                    if (this.world && typeof this.world.getHeightAt === 'function') {
                        this.studioDraggedObject.position.y = this.world.getHeightAt(h.point.x, h.point.z);
                    }
                    
                    // Update NPC internal position if it is an NPC
                    if (this.enemyManager) {
                        const enemy = this.enemyManager.enemies.find(e => e.mesh === this.studioDraggedObject);
                        if (enemy) {
                            enemy.position.copy(this.studioDraggedObject.position);
                        }
                    }
                    break;
                }
            }
        };

        const onPointerUp = () => {
            if (this.studioIsDragging) {
                this.studioIsDragging = false;
                this.studioDraggedObject = null;
                if (this.player.controls) this.player.controls.enabled = true; // Re-enable camera
            }
        };

        canvas.addEventListener('pointerdown', onPointerDown);
        canvas.addEventListener('pointermove', onPointerMove);
        canvas.addEventListener('pointerup', onPointerUp);
        canvas.addEventListener('pointerleave', onPointerUp);

        this._objectClickHandler = (event) => {
            if (!this.player || !this.hud) return;
            const mode = this.player.gameMode || 'arcade';
            // Feature intended para arcade; ignora matrix/studio
            if (mode === 'matrix') return;

            // Studio click-to-place prefab
            // Studio Mode: Remove NPC on click
            if (mode === 'studio' && this.studioRemoveNPCMode) {
                const rect = this.renderer.domElement.getBoundingClientRect();
                const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                const ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
                const ray = new THREE.Raycaster();
                ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
                
                // Check if we clicked on an NPC
                if (this.enemyManager && this.enemyManager.enemies) {
                    console.log('Remove NPC: Checking', this.enemyManager.enemies.length, 'enemies');
                    for (let i = this.enemyManager.enemies.length - 1; i >= 0; i--) {
                        const enemy = this.enemyManager.enemies[i];
                        if (enemy.mesh) {
                            const hits = ray.intersectObject(enemy.mesh, true);
                            if (hits.length > 0) {
                                console.log('Hit enemy', i, 'removing...');
                                // Remove this NPC
                                this.scene.remove(enemy.mesh);
                                this.enemyManager.enemies.splice(i, 1);
                                console.log('Removed NPC');
                                return;
                            }
                        }
                    }
                }
                return;
            }

            // Studio Mode: Place prefab
            if (mode === 'studio' && this.studioSelectedPrefab) {
                const rect = canvas.getBoundingClientRect();
                const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                const ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
                const ray = new THREE.Raycaster();
                ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
                const hits = ray.intersectObjects(this.world.objects, true);
                let groundHit = null;
                for (const h of hits) {
                    if (h.object && h.object.userData && h.object.userData.gameName === 'Ground') {
                        groundHit = h;
                        break;
                    }
                }
                // Fallback: center ray if touch overlay blocked the click
                if (!groundHit) {
                    const centerRay = new THREE.Raycaster();
                    centerRay.setFromCamera(new THREE.Vector2(0, 0), this.camera);
                    const centerHits = centerRay.intersectObjects(this.world.objects, true);
                    for (const h of centerHits) {
                        if (h.object && h.object.userData && h.object.userData.gameName === 'Ground') {
                            groundHit = h;
                            break;
                        }
                    }
                }

                if (groundHit) {
                    if (this.studioSelectedPrefab === 'npc') {
                        // Spawn NPC at clicked location
                        if (this.enemyManager && typeof this.enemyManager.spawnEnemyAt === 'function') {
                            const type = this.studioSelectedOptions ? this.studioSelectedOptions.type : 'normal';
                            this.enemyManager.spawnEnemyAt(groundHit.point.x, groundHit.point.z, type);
                        }
                    } else if (typeof this.world.spawnPrefab === 'function') {
                        const opts = this.studioSelectedOptions || {};
                        this.world.spawnPrefab(this.studioSelectedPrefab, groundHit.point.x, groundHit.point.z, opts);
                    }
                }
                
                // Clear selection and restore look area
                this.studioSelectedPrefab = null;
                this.studioSelectedOptions = null;
                this.toggleTouchLookArea(true);
                return;
            }


            let ndcX = 0;
            let ndcY = 0;
            if (this.player.controls && this.player.controls.isLocked) {
                // When locked, use center of screen
                ndcX = 0;
                ndcY = 0;
            } else {
                const rect = canvas.getBoundingClientRect();
                ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
            }

            this._pickRaycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);

            const pickables = [];
            if (this.world && Array.isArray(this.world.objects)) pickables.push(...this.world.objects);
            if (this.itemManager && Array.isArray(this.itemManager.items)) pickables.push(...this.itemManager.items);
            if (this.enemyManager && Array.isArray(this.enemyManager.enemies)) {
                this.enemyManager.enemies.forEach(enemy => {
                    if (enemy && enemy.mesh) pickables.push(enemy.mesh);
                });
            }
            if (pickables.length === 0) return;

            const hits = this._pickRaycaster.intersectObjects(pickables, true);
            if (!hits.length) return;

            // Find first ancestor that carries game metadata
            let obj = hits[0].object;
            let data = null;
            while (obj) {
                if (obj.userData && (obj.userData.gameId || obj.userData.gameid) && obj.userData.gameName) {
                    data = obj.userData;
                    break;
                }
                obj = obj.parent;
            }
            if (!data) return;

            const name = data.gameName || 'Object';
            const id = data.gameId || data.gameid || '---';
            if (typeof this.hud.showSelectionInfo === 'function') {
                this.hud.showSelectionInfo(name, id);
            }
        };

        canvas.addEventListener('click', this._objectClickHandler);
        canvas.addEventListener('pointerdown', this._objectClickHandler);
    }

    initStudioPaletteDrag(palette) {
        if (!palette || palette._dragInit) return;
        palette._dragInit = true;
        const handle = palette.querySelector('.palette-title') || palette;
        let dragging = false;
        let offsetX = 0;
        let offsetY = 0;
        let startX = 0;
        let startY = 0;
        let rectCache = null;
        palette.style.touchAction = 'none';

        const onMove = (ev) => {
            // Start dragging after small threshold to avoid resizing on simple clicks
            if (!dragging) {
                const dx = Math.abs(ev.clientX - startX);
                const dy = Math.abs(ev.clientY - startY);
                if (dx < 3 && dy < 3) return;
                dragging = true;
                if (rectCache) {
                    palette.style.right = 'auto';
                    palette.style.bottom = 'auto';
                    palette.style.position = 'fixed';
                    palette.style.width = `${rectCache.width}px`; // keep size while moving
                    // lock min/max to avoid stretching on touch
                    palette.style.minWidth = `${rectCache.width}px`;
                    palette.style.maxWidth = `${rectCache.width}px`;
                    // keep height auto to avoid stretching
                    palette.style.left = `${rectCache.left}px`;
                    palette.style.top = `${rectCache.top}px`;
                }
            }
            const rect = palette.getBoundingClientRect();
            const x = Math.max(0, Math.min(window.innerWidth - rect.width, ev.clientX - offsetX));
            const y = Math.max(0, Math.min(window.innerHeight - rect.height, ev.clientY - offsetY));
            palette.style.left = `${x}px`;
            palette.style.top = `${y}px`;
        };

        const onUp = () => {
            dragging = false;
            handle.releasePointerCapture && handle.releasePointerCapture(handle._dragPointerId);
            document.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerup', onUp);
        };

        handle.addEventListener('pointerdown', (ev) => {
            try { ev.preventDefault(); } catch (e) {}
            const rect = palette.getBoundingClientRect();
            rectCache = rect;
            offsetX = ev.clientX - rect.left;
            offsetY = ev.clientY - rect.top;
            startX = ev.clientX;
            startY = ev.clientY;
            dragging = false;
            handle._dragPointerId = ev.pointerId;
            // Some mobile browsers restrict setPointerCapture; wrap in try
            try { handle.setPointerCapture(ev.pointerId); } catch (e) {}
            document.addEventListener('pointermove', onMove);
            document.addEventListener('pointerup', onUp);
        });
    }

    togglePause() {
        if (!this.player) return; // Don't pause if game hasn't started
        
        // If pointer lock is active, show pause menu
        if (this.player.controls && this.player.controls.isLocked) {
            this.showPauseMenu();
            return;
        }
        
        // Otherwise, toggle pause normally (shouldn't happen often now)
        this.isPaused = !this.isPaused;
        
        if (this.isPaused) {
            this.pauseBackgroundMusic();
        } else {
            this.playBackgroundMusic();
        }
    }

    setupPauseMenu() {
        // ESC key now shows main menu directly (reusing the same responsive UI)
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && this.player && !this.player.isDead) {
                e.preventDefault();
                this.showPauseMenu();
            }
        });
        
        // Old pause menu buttons (if they exist, remove them from DOM)
        const oldPauseMenu = document.getElementById('pause-menu');
        if (oldPauseMenu) {
            oldPauseMenu.remove();
        }
    }
    
    showPauseMenu() {
        // Pause game
        this.isPaused = true;
        
        // Unlock pointer
        if (this.player.controls && this.player.controls.isLocked) {
            this.player.controls.unlock();
        }

        // Stop looping SFX while paused
        if (this.player && typeof this.player.stopFootsteps === 'function') {
            this.player.stopFootsteps();
        }
        
        // Pause background music
        this.pauseBackgroundMusic();
        
        // Show main menu (reuse the same UI)
        const menu = document.getElementById('main-menu');
        if (menu) {
            menu.style.display = 'flex';
            this.setMenuOpenState(true);
            
            // Update button text to show "Resume" instead of "Play Game"
            const playBtn = document.getElementById('play-btn');
            if (playBtn && this.player) {
                playBtn.innerText = 'RESUME GAME';
            }
        }

        // Hide hotbar when menu is open
        this.setHotbarVisible(false);

        // Reopen studio palette when pausing in studio mode so the user must press ESC to re-arm building
        if (this.player && this.player.gameMode === 'studio') {
            const palette = document.getElementById('studio-palette');
            if (palette) palette.classList.remove('hidden');
        }
    }

    // Background music control
    playBackgroundMusic() {
        try {
            if (!this.bgAudio) {
                this.bgAudio = new Audio(bgMusic);
                this.bgAudio.loop = true;
                this.bgAudio.volume = this.bgMusicVolume;
                this.bgAudio.preload = 'auto';
            }
            // Try to play; browsers require a user gesture which is satisfied by Play button click
            const playPromise = this.bgAudio.play();
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.catch(() => {
                    // ignore play errors (autoplay blocked); will attempt later on user gesture
                });
            }
        } catch (e) {
            console.warn('Could not play background music:', e);
        }
    }

    pauseBackgroundMusic() {
        if (this.bgAudio && !this.bgAudio.paused) {
            try { this.bgAudio.pause(); } catch (e) {}
        }
    }

    stopBackgroundMusic() {
        if (this.bgAudio) {
            try {
                this.bgAudio.pause();
                this.bgAudio.currentTime = 0;
            } catch (e) {}
        }
    }

    requestFullscreenIfNeeded(enabled) {
        if (!enabled) return;
        const doc = document;
        const alreadyFullscreen = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
        if (alreadyFullscreen) return;
        const elem = document.documentElement || document.body;
        const req = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.mozRequestFullScreen || elem.msRequestFullscreen;
        if (req) {
            req.call(elem).catch((err) => {
                console.warn('Fullscreen request failed:', err);
                if (IS_MOBILE) {
                    alert('Fullscreen may not be supported on this mobile device.');
                }
            });
        } else if (IS_MOBILE) {
            alert('Fullscreen is not available on this mobile device.');
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        if (!this._animationStarted) return;
        
        // Stats: begin frame measurement
        this.stats.begin();
        
        requestAnimationFrame(() => this.animate());

        try {
            const dt = this.clock.getDelta();

        // Cap delta time to prevent huge jumps (e.g., when returning from pause/settings)
        const cappedDt = Math.min(dt, 0.1); // Max 100ms per frame

        // Only update game logic if not paused
        // Allow updates when PointerLock is active OR when touch controls are present (mobile)
        const touchActive = !!(this.touchControls && this.touchControls.enabled);
        const pointerLocked = !!(this.player && this.player.controls && this.player.controls.isLocked);
        const isStudio = !!(this.player && this.player.gameMode === 'studio');
        if (!this.isPaused && this.player && (pointerLocked || touchActive || isStudio)) {
            // Execute updates with guarded logging to catch where errors originate
            try {
                this.player.update(cappedDt);
            } catch (err) {
                console.error('Error in player.update:', err);
            }

            try {
                const stormStatus = this.world.update(cappedDt, this.player.position);
                const isStudio = this.player && this.player.gameMode === 'studio';
                if (!isStudio && stormStatus && stormStatus.inStorm) {
                    this.player.takeDamage(1 * cappedDt); // Reduced damage: 1 per second
                } else if (this.player && typeof this.player.clearHurtQueue === 'function') {
                    // Leaving storm: stop hurt loop unless enemies hit again
                    this.player.clearHurtQueue();
                }
            } catch (err) {
                console.error('Error in world.update:', err);
            }

            try {
                this.enemyManager.update(cappedDt);
            } catch (err) {
                console.error('Error in enemyManager.update:', err);
            }

            try {
                this.itemManager.update(cappedDt);
            } catch (err) {
                console.error('Error in itemManager.update:', err);
            }
            // Multiplayer timed drops and lobby countdown
            if (this.player && this.player.gameMode === 'multiplayer') {
                if (this.matchPhase === 'live') {
                    this.multiplayerDropTimer += cappedDt;
                    if (this.multiplayerDropTimer >= 30) {
                        this.multiplayerDropActive = true;
                    }
                    if (this.multiplayerDropActive && this.itemManager) {
                        this.multiplayerDropCooldown -= cappedDt;
                        if (this.multiplayerDropCooldown <= 0) {
                            this.multiplayerDropCooldown = 60;
                            if (typeof this.itemManager.spawnMatrixDropNearPlayer === 'function') {
                                this.itemManager.spawnMatrixDropNearPlayer();
                            }
                        }
                    }
                } else if (this.matchPhase === 'countdown') {
                    this.lobbyCountdown -= cappedDt;
                    const lobbyCountdownEl = document.getElementById('mp-lobby-countdown');
                    if (this.lobbyCountdown < 0) this.lobbyCountdown = 0;
                    if (lobbyCountdownEl) lobbyCountdownEl.innerText = `Starting in ${Math.ceil(this.lobbyCountdown)}...`;
                    if (this.lobbyCountdown <= 0) {
                        this.startMultiplayerMatch();
                    }
                }
            }

            try {
                if (this.multiplayer && typeof this.multiplayer.update === 'function') {
                    this.multiplayer.update(cappedDt);
                }
            } catch (err) {
                console.error('Error in multiplayer.update:', err);
            }
            
            // Update survival timer for arcade and survival modes
            if (this.player && (this.player.gameMode === 'arcade' || this.player.gameMode === 'survival')) {
                this.survivalTime = (performance.now() - this.survivalStartTime) / 1000;
                const survivalTimeEl = document.getElementById('survival-time-value');
                if (survivalTimeEl) {
                    const minutes = Math.floor(this.survivalTime / 60);
                    const seconds = Math.floor(this.survivalTime % 60);
                    survivalTimeEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
                
                // Check for loot drop eligibility
                if (this.itemManager && this.enemyManager) {
                    const totalItems = this.itemManager.items ? this.itemManager.items.filter(it => !(it.userData && it.userData.isOpened)).length : 0;
                    const killedPercent = this.enemyManager.targetCount > 0 ? (this.enemyManager.killedCount / this.enemyManager.targetCount) : 0;
                    
                    // If no items left and player killed at least 30% of zombies, enable loot drops
                    if (totalItems === 0 && killedPercent >= 0.3 && !this.lootDropEligible) {
                        this.lootDropEligible = true;
                        this.lootDropCooldown = 0;
                        console.log('Loot drops from sky enabled! Player killed 30%+ zombies.');
                    }
                    
                    // Drop loot from sky periodically
                    if (this.lootDropEligible) {
                        this.lootDropCooldown -= cappedDt;
                        if (this.lootDropCooldown <= 0) {
                            this.lootDropCooldown = 45; // Drop every 45 seconds
                            if (typeof this.itemManager.spawnMatrixDropNearPlayer === 'function') {
                                // Drop 2-3 items near player
                                const dropCount = 2 + Math.floor(Math.random() * 2);
                                for (let i = 0; i < dropCount; i++) {
                                    this.itemManager.spawnMatrixDropNearPlayer();
                                }
                                console.log(`Dropped ${dropCount} items from sky!`);
                            }
                        }
                    }
                }
            }

            try {
                this.hud.update();
            } catch (err) {
                console.error('Error in hud.update:', err);
            }
            
            // Update touch controls (show/hide interact button)
            try {
                if (this.touchControls && typeof this.touchControls.update === 'function') {
                    this.touchControls.update();
                }
            } catch (err) {
                console.error('Error in touchControls.update:', err);
            }

            // Check Victory
            try {
                const noEnemiesMode = this.player && (this.player.gameMode === 'matrix' || this.player.gameMode === 'studio' || this.player.gameMode === 'multiplayer' || this.player.gameMode === 'matrix-ai');
                if (!noEnemiesMode && this.enemyManager.enemies.length === 0 && !this.player.isDead && !this.victoryShown) {
                    this.victoryShown = true; // Prevent multiple calls
                    try {
                        if (this.player && typeof this.player.stopFootsteps === 'function') {
                            this.player.stopFootsteps();
                        }
                    } catch (e) {}
                    this.hud.showVictory();
                    this.player.controls.unlock();
                } else if (this.player && this.player.gameMode === 'multiplayer' && this.matchPhase === 'live' && !this.player.isDead && !this.victoryShown) {
                    const others = this.multiplayer ? this.multiplayer.others.size : 0;
                    if (others === 0) {
                        this.victoryShown = true;
                        this.hud.showVictory();
                        if (this.player.controls && this.player.controls.unlock) this.player.controls.unlock();
                    }
                }
            } catch (err) {
                console.error('Error in victory check:', err);
            }
        }

            // Render
            this.renderer.render(this.scene, this.camera);
            
            // Stats: end frame measurement
            this.stats.end();
        } catch (err) {
                try {
                    console.error('Unhandled error in Game.animate:', err, {
                        playerExists: !!this.player,
                        playerWeaponCount: this.player ? (this.player.weapons ? this.player.weapons.length : 'no-weapons') : 'no-player',
                        currentWeaponIndex: this.player ? this.player.currentWeaponIndex : 'no-player',
                        hudExists: !!this.hud,
                        hudSettings: this.hud ? this.hud.settings : null,
                    });

                    // Try to gather more info about materials/meshes that may cause renderer uniform errors
                    try {
                        this._logRenderMaterialDiagnostics(err);
                    } catch (diagErr) {
                        console.error('Error during render diagnostics:', diagErr);
                    }
                } catch (logErr) {
                    console.error('Error logging animate failure:', logErr);
                }

                // Don't rethrow here to keep the render loop running; we've logged diagnostics.
                // Rethrowing was causing the loop to stop and the uncaught exception to spam.
                return;
        }
    }

}

// Play an end-of-game sequence: lower background music to 20% and play an SFX/music file.
Game.prototype.playEndSequence = function(sfxPath, options = {}) {
    try {
        // Prevent multiple simultaneous calls
        if (this._playingEndSequence) {
            return;
        }
        this._playingEndSequence = true;
        
        // Stop background music completely during end sequence
        if (this.bgAudio) {
            try {
                this._prevBgVolume = this.bgAudio.volume;
                this.bgAudio.pause(); // Stop completely instead of lowering volume
            } catch (e) { 
                this._prevBgVolume = this.bgMusicVolume; 
            }
        }

        // Stop any previous end-sequence audio
        if (this._endSequenceAudio) {
            try { 
                this._endSequenceAudio.pause(); 
                this._endSequenceAudio.currentTime = 0;
            } catch (e) {}
            this._endSequenceAudio = null;
        }

        // Play provided SFX/music
        const a = new Audio(sfxPath);
        a.loop = options.loop || false;
        a.volume = options.volume !== undefined ? options.volume : 1.0;
        a.preload = 'auto';
        
        // Store reference BEFORE attempting to play to avoid race conditions
        this._endSequenceAudio = a;
        
        // Load the audio first to ensure it's ready
        a.load();
        
        // On mobile/tablet, audio playback requires user interaction
        // Try to play after a small delay to ensure load() completes
        setTimeout(() => {
            const playPromise = a.play();
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.catch((err) => {
                    console.log('Audio playback blocked, waiting for user interaction:', err);
                    // Set up one-time touch/click handler to resume audio
                    const resumeAudio = () => {
                        // Ensure audio is loaded before playing
                        if (a.readyState < 2) {
                            a.load();
                        }
                        a.play().catch(() => {});
                        document.removeEventListener('touchstart', resumeAudio);
                        document.removeEventListener('click', resumeAudio);
                    };
                    document.addEventListener('touchstart', resumeAudio, { once: true });
                    document.addEventListener('click', resumeAudio, { once: true });
                });
            }
        }, 100);

        // Optionally restore background volume after the audio ends
        a.addEventListener('ended', () => {
            try {
                if (this.bgAudio && this._prevBgVolume !== null) {
                    this.bgAudio.volume = this._prevBgVolume;
                }
            } catch (e) {}
            this._endSequenceAudio = null;
            this._prevBgVolume = null;
            this._playingEndSequence = false; // Allow future end sequences
        });
    } catch (e) {
        console.warn('playEndSequence error:', e);
    }
};

// Diagnostic helper: logs basic information about scene meshes and their materials
Game.prototype._logRenderMaterialDiagnostics = function(originalError) {
    try {
        const problematic = [];
        let totalMeshes = 0;
        this.scene.traverse(obj => {
            if (obj.isMesh) {
                totalMeshes++;
                const mat = obj.material;
                // Material can be an array for multi-material meshes
                if (!mat) {
                    problematic.push({ uuid: obj.uuid, name: obj.name || obj.userData && obj.userData.gameName || 'mesh', issue: 'no-material' });
                    return;
                }

                const infoFor = (m) => {
                    return {
                        type: m.type || (m.constructor && m.constructor.name) || 'Unknown',
                        isShaderMaterial: !!m.isShaderMaterial,
                        isStandardMaterial: !!m.isMeshStandardMaterial,
                        hasEmissive: m.emissive !== undefined,
                        uniformsKeys: m.uniforms ? Object.keys(m.uniforms) : null,
                        userData: m.userData || null
                    };
                };

                if (Array.isArray(mat)) {
                    problematic.push({ uuid: obj.uuid, name: obj.name || obj.userData && obj.userData.gameName || 'mesh', materials: mat.map(infoFor) });
                } else {
                    problematic.push({ uuid: obj.uuid, name: obj.userData && obj.userData.gameName || obj.name || 'mesh', material: infoFor(mat) });
                }
            }
        });

        console.error('Render diagnostics:', {
            originalError: originalError && originalError.toString(),
            totalMeshes,
            sampleProblems: problematic.slice(0, 30),
            note: 'Look for materials missing expected uniforms (shader/standard) or meshes without material.'
        });
    } catch (e) {
        console.error('Failed collecting render diagnostics:', e);
    }
};

// Start the game
window.game = new Game();

// Setup debug overlay: shows on-screen logs when enabled in settings or via localStorage/flag
(function setupDebugOverlay(){
    try {
        // Check if createDebugOverlay is available
        if (typeof createDebugOverlay !== 'function') {
            console.warn('createDebugOverlay is not available, skipping debug overlay setup');
            return;
        }
        
        const saved = JSON.parse(localStorage.getItem('voxel-firecraft-settings') || '{}');
        const want = (saved && saved.debugMode) || localStorage.getItem('showDebugOverlay') === 'true' || !!window.DEBUG_OVERLAY;
        // create overlay (it patches console); auto-show only when requested
        window.debugOverlay = createDebugOverlay({ autoShow: !!want });

        // keyboard quick-toggle (backtick) for convenience on desktop
        window.addEventListener('keydown', (e) => {
            if (e.key === '`' && window.debugOverlay) {
                const el = document.getElementById('debug-overlay');
                if (el && el.classList.contains('hidden')) window.debugOverlay.show(); else if (window.debugOverlay) window.debugOverlay.hide();
            }
        });

        // Create a small floating toggle button so touch devices can open the overlay
        try {
            let btn = document.getElementById('debug-toggle-btn');
            if (!btn) {
                btn = document.createElement('button');
                btn.id = 'debug-toggle-btn';
                btn.title = 'Debug logs';
                btn.innerText = 'DBG';
                document.body.appendChild(btn);
            }
            // show/hide based on saved preference or always visible in development
            const shouldShowButton = true; // keep available so users can toggle on devices
            if (!shouldShowButton) btn.classList.add('hidden');

            btn.addEventListener('click', (ev) => {
                try {
                    const el = document.getElementById('debug-overlay');
                    if (el && el.classList.contains('hidden')) {
                        window.debugOverlay && window.debugOverlay.show();
                        localStorage.setItem('showDebugOverlay', 'true');
                    } else {
                        window.debugOverlay && window.debugOverlay.hide();
                        localStorage.removeItem('showDebugOverlay');
                    }
                } catch (e) { console.warn('debug toggle error', e); }
            });
        } catch (e) {}
    } catch (e) {
        console.warn('debugOverlay init failed', e);
    }
})();

// Listen for touch-look events and apply to player camera when available
window.addEventListener('game-touch-look', (ev) => {
    try {
        const d = ev.detail || { dx: 0, dy: 0 };
        const sens = 0.003; // Lower sensitivity for smoother control
        if (window.game && window.game.player) {
            try {
                // call player method if exists
                if (typeof window.game.player.rotateCamera === 'function') {
                    // Pass positive deltas:
                    // Drag Right (+dx) -> Subtract Yaw -> Look Right
                    // Drag Down (+dy) -> Subtract Pitch -> Look Down
                    window.game.player.rotateCamera(d.dx * sens, d.dy * sens);
                } else {
                    // fallback: store into player's internal touch yaw/pitch
                    // Increase sensitivity significantly for tablet feel
                    const touchSens = 0.01; 
                    window.game.player._touchYaw = (window.game.player._touchYaw || 0) - d.dx * touchSens;
                    window.game.player._touchPitch = (window.game.player._touchPitch || 0) - d.dy * touchSens;
                    // clamp pitch
                    const limit = Math.PI / 2 - 0.1;
                    window.game.player._touchPitch = Math.max(-limit, Math.min(limit, window.game.player._touchPitch));
                }
            } catch (e) {}
        }
    } catch (e) {}
});
