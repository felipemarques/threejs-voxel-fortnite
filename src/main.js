import * as THREE from 'three';
import bgMusic from './assets/background-music-by-suno.ogg';
import { World, DEFAULT_MAP_SIZE } from './world.js';
import { Player } from './player.js';
import { HUD } from './hud.js';
import { EnemyManager } from './enemies.js';
import { ItemManager } from './items.js';
import { TouchControls } from './touchControls.js';

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


class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
        this.scene.fog = new THREE.Fog(0x87CEEB, 20, 100);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        // Cap pixel ratio to avoid ultra-high-res rendering on dense displays
        const maxPixelRatio = IS_MOBILE ? 1.0 : 1.5;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap;
        document.getElementById('game-container').appendChild(this.renderer.domElement);

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

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Clock
        this.clock = new THREE.Clock();
        // Object picking for click-to-identify
        this._pickRaycaster = new THREE.Raycaster();
        this._objectClickHandler = null;
        this._objectClickTarget = null;
        // Pause state
        this.isPaused = false;
        this.pauseMenu = document.getElementById('pause-menu');
        // Background music (initialized on user gesture)
        this.bgAudio = null;
        this.bgMusicVolume = 0.5;
        this._endSequenceAudio = null;
        this._prevBgVolume = null;
        // ESC key to toggle pause
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                this.togglePause();
            }
        });

        // Setup Menu
        this.setupMenu();

        // Soften pointer lock errors in environments that reject the request (e.g. ESC before completion)
        document.addEventListener('pointerlockerror', (ev) => {
            ev.preventDefault && ev.preventDefault();
            console.warn('Pointer lock request failed or was cancelled.');
        });
    }

    updateDebugToggleVisibility(enabled) {
        const btn = document.getElementById('debug-toggle-btn');
        if (!btn) return;
        btn.classList.toggle('hidden', !enabled);
        if (!enabled && window.debugOverlay && typeof window.debugOverlay.hide === 'function') {
            try { window.debugOverlay.hide(); } catch (e) {}
            try { localStorage.removeItem('showDebugOverlay'); } catch (e) {}
        }
    }

    setupMenu() {
        const menu = document.getElementById('main-menu');
        const playBtn = document.getElementById('play-btn');
        const diffSelect = document.getElementById('setting-difficulty');
        const enemiesInput = document.getElementById('setting-enemies');
        const stormInput = document.getElementById('setting-storm');
        const mapSizeInput = document.getElementById('setting-map-size');
        const mapSizeVal = document.getElementById('map-size-val');
        const debugCheckbox = document.getElementById('setting-debug');
        const minimapCheckbox = document.getElementById('setting-minimap');
        const volumeSlider = document.getElementById('setting-music-volume');
        const volumeVal = document.getElementById('setting-music-volume-val');
        const cameraSelect = document.getElementById('setting-camera');
        const touchCheckbox = document.getElementById('setting-touch-controls');
        const gameModeSelect = document.getElementById('setting-game-mode');
        const quitBtn = document.getElementById('quit-btn');
        const floatBtn = document.getElementById('float-btn');
        
        const enemiesVal = document.getElementById('enemy-count-val');
        const stormVal = document.getElementById('storm-time-val');

        const bindRangeLabel = (inputEl, labelEl) => {
            if (!inputEl || !labelEl) return;
            const update = () => { labelEl.innerText = inputEl.value; };
            inputEl.addEventListener('input', update);
            inputEl.addEventListener('change', update);
            update();
        };

        // Load Settings
        const savedSettings = localStorage.getItem('voxel-firecraft-settings');
        if (savedSettings) {
            const s = JSON.parse(savedSettings);
            diffSelect.value = s.difficulty;
            enemiesInput.value = s.enemyCount;
            stormInput.value = s.stormTime;
            enemiesVal.innerText = s.enemyCount;
            stormVal.innerText = s.stormTime;
            if (mapSizeInput && mapSizeVal) {
                const ms = s.mapSize || DEFAULT_MAP_SIZE;
                mapSizeInput.value = ms;
                mapSizeVal.innerText = ms;
            }
            if (s.debugMode) debugCheckbox.checked = true;
            if (minimapCheckbox) minimapCheckbox.checked = s.showMinimap !== false;
            if (s.musicVolume !== undefined && volumeSlider && volumeVal) {
                const v = parseInt(s.musicVolume, 10);
                volumeSlider.value = v;
                volumeVal.innerText = v;
                this.bgMusicVolume = v / 100;
            }
            if (s.cameraMode) cameraSelect.value = s.cameraMode;
            if (s.useTouchControls !== undefined && touchCheckbox) touchCheckbox.checked = !!s.useTouchControls;
            if (s.gameMode && gameModeSelect) gameModeSelect.value = s.gameMode;
        }

        // Update labels live
        bindRangeLabel(enemiesInput, enemiesVal);
        bindRangeLabel(stormInput, stormVal);
        bindRangeLabel(mapSizeInput, mapSizeVal);

        playBtn.onclick = () => {
            const settings = {
                difficulty: diffSelect.value,
                enemyCount: parseInt(enemiesInput.value),
                stormTime: parseInt(stormInput.value),
                mapSize: mapSizeInput ? parseInt(mapSizeInput.value) : DEFAULT_MAP_SIZE,
                debugMode: debugCheckbox.checked,
                showMinimap: minimapCheckbox ? minimapCheckbox.checked : true,
                musicVolume: volumeSlider ? parseInt(volumeSlider.value) : Math.round(this.bgMusicVolume * 100),
                musicEnabled: document.getElementById('setting-music-enabled') ? document.getElementById('setting-music-enabled').checked : true,
                cameraMode: cameraSelect.value,
                useTouchControls: touchCheckbox ? touchCheckbox.checked : false,
                gameMode: gameModeSelect ? gameModeSelect.value : 'survival'
            };
            
            // Save Settings
            localStorage.setItem('voxel-firecraft-settings', JSON.stringify(settings));
            this.updateDebugToggleVisibility(settings.debugMode);
            
            // Hide Menu
            menu.style.display = 'none';
            // Start background music (user gesture) if enabled
            if (settings.musicEnabled !== false) {
                this.playBackgroundMusic();
            } else {
                this.stopBackgroundMusic();
            }
            
            // Check if game is already running (resuming from pause/settings)
            if (this.player && this.world && this.enemyManager) {
                // Game already exists, just resume
                this.isPaused = false;
                this.clock.getDelta(); // Reset clock to prevent delta accumulation
                
                // Reset button text
                playBtn.innerText = 'PLAY GAME';
                
                // Lock pointer again
                if (this.player.controls) {
                    try {
                        this.player.controls.lock();
                    } catch (e) {}
                }
                
                // Apply updated settings to HUD if present
                if (this.hud) {
                    this.hud.settings = settings;
                }
            } else {
                // Start new game
                playBtn.innerText = 'PLAY GAME';
                this.startGame(settings);
            }
        };

        if (quitBtn) {
            quitBtn.onclick = () => {
                try {
                    localStorage.removeItem('voxel-firecraft-settings');
                } catch (e) {}
                location.reload();
            };
        }

        if (floatBtn) floatBtn.classList.add('hidden');

        // Volume slider live update
        if (volumeSlider) {
            volumeSlider.oninput = () => {
                const v = parseInt(volumeSlider.value, 10);
                if (volumeVal) volumeVal.innerText = v;
                this.bgMusicVolume = v / 100;
                if (this.bgAudio) {
                    try { this.bgAudio.volume = this.bgMusicVolume; } catch(e) {}
                }
            };
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
    }

    startGame(settings) {
        // Components
        // 1. Player (initially without world objects)
        const effectiveSettings = { ...settings };
        if (effectiveSettings.gameMode === 'matrix' || effectiveSettings.gameMode === 'studio') {
            effectiveSettings.enemyCount = 0;
            effectiveSettings.skipLoot = true;
        }
        this.player = new Player(this.camera, this.scene, null, effectiveSettings);
        
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

        // Matrix mode: spawn all items near player for quick testing
        if (effectiveSettings.gameMode === 'matrix' && this.itemManager && typeof this.itemManager.spawnMatrixLoadout === 'function') {
            this.itemManager.spawnMatrixLoadout(this.player.position.x, this.player.position.z);
        }

        this.hud = new HUD(this.player, this.world, settings);
        this.enemyManager = new EnemyManager(this.scene, this.player, this.world, effectiveSettings);
        
        // Give player reference to enemies for shooting
        this.player.setEnemyManager(this.enemyManager);
        // Enable click-to-identify in arcade/survival styles
        this.setupObjectInspector();
        // Hide DBG button when debug mode is off
        this.updateDebugToggleVisibility(!!settings.debugMode);

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

        // Hide storm timer in studio
        const stormTimer = document.getElementById('storm-timer');
        if (stormTimer) {
            const hide = effectiveSettings.gameMode === 'studio';
            stormTimer.classList.toggle('hidden', hide);
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
                if (this.player && this.player.controls && !this.player.controls.isLocked && !this.player.isDead) {
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

        // Lock pointer immediately after Play click (desktop)
        if (!IS_MOBILE && this.player && this.player.controls && !this.player.controls.isLocked) {
            try {
                this.player.lockControls();
            } catch (e) { console.warn('Pointer lock on start skipped/failed:', e); }
        }

        this.animate();
    }

    setupStudioPalette(settings) {
        const palette = document.getElementById('studio-palette');
        if (!palette) return;
        const isStudio = settings && settings.gameMode === 'studio';
        palette.classList.toggle('hidden', !isStudio);
        if (!isStudio) return;

        const buttons = palette.querySelectorAll('button[data-prefab]');
        buttons.forEach(btn => {
            if (btn._boundStudio) return;
            btn._boundStudio = true;
            btn.addEventListener('click', () => {
                if (!this.player || !this.world) return;
                const action = btn.getAttribute('data-action');
                if (action === 'resume') {
                    this.isPaused = false;
                    if (this.player && this.player.controls && !this.player.controls.isLocked) {
                        try { this.player.controls.lock(); } catch (e) {}
                    }
                    const menu = document.getElementById('main-menu');
                    if (menu) menu.style.display = 'none';
                    if (this.bgAudio && this.bgAudio.paused) this.playBackgroundMusic();
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
                // Close any submenu
                if (submenuTarget) {
                    const menu = document.getElementById(submenuTarget);
                    if (menu) menu.classList.add('hidden');
                }
            });
        });
    }

    setupObjectInspector() {
        const canvas = this.renderer ? this.renderer.domElement : null;
        if (!canvas) return;

        // Remove previous handler if reusing the same canvas
        if (this._objectClickHandler && this._objectClickTarget) {
            try {
                this._objectClickTarget.removeEventListener('click', this._objectClickHandler);
            } catch (e) {}
        }
        this._objectClickTarget = canvas;

        this._objectClickHandler = (event) => {
            if (!this.player || !this.hud) return;
            const mode = this.player.gameMode || 'survival';
            // Feature intended for arcade/survival style play (skip matrix/studio)
            if (mode === 'matrix') return;

            // Studio click-to-place prefab
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
                if (groundHit && typeof this.world.spawnPrefab === 'function') {
                    const opts = this.studioSelectedOptions || {};
                    this.world.spawnPrefab(this.studioSelectedPrefab, groundHit.point.x, groundHit.point.z, opts);
                }
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
            
            // Update button text to show "Resume" instead of "Play Game"
            const playBtn = document.getElementById('play-btn');
            if (playBtn && this.player) {
                playBtn.innerText = 'RESUME GAME';
            }
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

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        try {
            const dt = this.clock.getDelta();

        // Cap delta time to prevent huge jumps (e.g., when returning from pause/settings)
        const cappedDt = Math.min(dt, 0.1); // Max 100ms per frame

        // Only update game logic if not paused
        // Allow updates when PointerLock is active OR when touch controls are present (mobile)
        const touchActive = !!(this.touchControls && this.touchControls.enabled);
        const pointerLocked = !!(this.player && this.player.controls && this.player.controls.isLocked);
        if (!this.isPaused && this.player && (pointerLocked || touchActive)) {
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
                const noEnemiesMode = this.player && (this.player.gameMode === 'matrix' || this.player.gameMode === 'studio');
                if (!noEnemiesMode && this.enemyManager.enemies.length === 0 && !this.player.isDead && !this.victoryShown) {
                    this.victoryShown = true; // Prevent multiple calls
                    try {
                        if (this.player && typeof this.player.stopFootsteps === 'function') {
                            this.player.stopFootsteps();
                        }
                    } catch (e) {}
                    this.hud.showVictory();
                    this.player.controls.unlock();
                }
            } catch (err) {
                console.error('Error in victory check:', err);
            }
        }

            this.renderer.render(this.scene, this.camera);
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
