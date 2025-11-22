import * as THREE from 'three';
import { World } from './world.js';
import { Player } from './player.js';
import { HUD } from './hud.js';
import { EnemyManager } from './enemies.js';
import { ItemManager } from './items.js';


class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
        this.scene.fog = new THREE.Fog(0x87CEEB, 20, 100);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
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
        dirLight.shadow.camera.far = 200;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        this.scene.add(dirLight);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Clock
        this.clock = new THREE.Clock();
        // Pause state
        this.isPaused = false;
        this.pauseMenu = document.getElementById('pause-menu');
        // Background music (initialized on user gesture)
        this.bgAudio = null;
        this.bgMusicVolume = 0.5;
        // ESC key to toggle pause
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                this.togglePause();
            }
        });

        // Setup Menu
        this.setupMenu();
    }

    setupMenu() {
        const menu = document.getElementById('main-menu');
        const playBtn = document.getElementById('play-btn');
        const diffSelect = document.getElementById('setting-difficulty');
        const enemiesInput = document.getElementById('setting-enemies');
        const stormInput = document.getElementById('setting-storm');
        const debugCheckbox = document.getElementById('setting-debug');
        const showIdsCheckbox = document.getElementById('setting-show-ids');
        const showTargetDistCheckbox = document.getElementById('setting-show-target-distance');
        const volumeSlider = document.getElementById('setting-music-volume');
        const volumeVal = document.getElementById('setting-music-volume-val');
        const cameraSelect = document.getElementById('setting-camera');
        
        const enemiesVal = document.getElementById('enemy-count-val');
        const stormVal = document.getElementById('storm-time-val');

        // Load Settings
        const savedSettings = localStorage.getItem('voxel-fortnite-settings');
        if (savedSettings) {
            const s = JSON.parse(savedSettings);
            diffSelect.value = s.difficulty;
            enemiesInput.value = s.enemyCount;
            stormInput.value = s.stormTime;
            enemiesVal.innerText = s.enemyCount;
            stormVal.innerText = s.stormTime;
            if (s.debugMode) debugCheckbox.checked = true;
            if (s.showRenderedIds && showIdsCheckbox) showIdsCheckbox.checked = true;
            if (s.showTargetDistance && showTargetDistCheckbox) showTargetDistCheckbox.checked = true;
            if (s.musicVolume !== undefined && volumeSlider && volumeVal) {
                const v = parseInt(s.musicVolume, 10);
                volumeSlider.value = v;
                volumeVal.innerText = v;
                this.bgMusicVolume = v / 100;
            }
            if (s.cameraMode) cameraSelect.value = s.cameraMode;
        }

        // Update labels
        enemiesInput.oninput = () => enemiesVal.innerText = enemiesInput.value;
        stormInput.oninput = () => stormVal.innerText = stormInput.value;

        playBtn.onclick = () => {
            const settings = {
                difficulty: diffSelect.value,
                enemyCount: parseInt(enemiesInput.value),
                stormTime: parseInt(stormInput.value),
                debugMode: debugCheckbox.checked,
                showRenderedIds: showIdsCheckbox ? showIdsCheckbox.checked : false,
                showTargetDistance: showTargetDistCheckbox ? showTargetDistCheckbox.checked : false,
                musicVolume: volumeSlider ? parseInt(volumeSlider.value) : Math.round(this.bgMusicVolume * 100),
                cameraMode: cameraSelect.value
            };
            
            // Save Settings
            localStorage.setItem('voxel-fortnite-settings', JSON.stringify(settings));
            
            // Hide Menu
            menu.style.display = 'none';
            // Start background music (user gesture)
            this.playBackgroundMusic();
            
            // Check if game is already running (resuming from pause/settings)
            if (this.player && this.world && this.enemyManager) {
                // Game already exists, just resume
                this.isPaused = false;
                this.clock.getDelta(); // Reset clock to prevent delta accumulation
                // Apply updated settings to HUD if present
                if (this.hud) {
                    this.hud.settings = settings;
                }
            } else {
                // Start new game
                this.startGame(settings);
            }
        };

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
    }

    startGame(settings) {
        // Components
        // 1. Player (initially without world objects)
        this.player = new Player(this.camera, this.scene, null, settings);
        
        // 2. ItemManager (needs player)
        this.itemManager = new ItemManager(this.scene, this.player);
        
        // 3. World (needs itemManager)
        this.world = new World(this.scene, this.itemManager, settings);
        
        // 4. Update Player with World Objects
        this.player.worldObjects = this.world.objects;

        this.hud = new HUD(this.player, settings);
        this.enemyManager = new EnemyManager(this.scene, this.player, this.world, settings);
        
        // Give player reference to enemies for shooting
        this.player.setEnemyManager(this.enemyManager);

        // Event Listeners
        window.addEventListener('resize', () => this.onWindowResize(), false);
        // Only lock pointer when clicking the game canvas (prevents accidental locks from UI clicks)
        const canvas = this.renderer.domElement;
        canvas.addEventListener('click', () => {
            if (!this.player.controls.isLocked && !this.player.isDead) {
                this.player.lockControls();
            }
        });

        // Setup pause menu buttons
        this.setupPauseMenu();

        this.animate();
    }

    togglePause() {
        if (!this.player) return; // Don't pause if game hasn't started
        
        // If pointer lock is active, unlock it and open pause menu
        if (this.player.controls && this.player.controls.isLocked) {
            this.isPaused = true;
            this.player.controls.unlock();
            if (this.pauseMenu) this.pauseMenu.classList.remove('hidden');
            // Pause background music when showing pause menu
            this.pauseBackgroundMusic();
            return;
        }
        
        // Otherwise, toggle pause normally
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            if (this.pauseMenu) this.pauseMenu.classList.remove('hidden');
            if (this.player.controls) this.player.controls.unlock();
            // Pause background music
            this.pauseBackgroundMusic();
        } else {
            if (this.pauseMenu) this.pauseMenu.classList.add('hidden');
            // Reset clock to prevent delta time accumulation
            this.clock.getDelta();
            // Resume background music when unpausing
            this.playBackgroundMusic();
        }
    }

    setupPauseMenu() {
        const resumeBtn = document.getElementById('resume-btn');
        const settingsBtn = document.getElementById('settings-btn');
        const quitBtn = document.getElementById('quit-btn');
        
        if (resumeBtn) resumeBtn.onclick = () => this.togglePause();
        if (settingsBtn) settingsBtn.onclick = () => {
            // Hide pause menu and show main menu (keep game paused)
            if (this.pauseMenu) this.pauseMenu.classList.add('hidden');
            const menu = document.getElementById('main-menu');
            if (menu) menu.style.display = 'block';
            // Keep isPaused = true so game stays frozen
        };
        if (quitBtn) quitBtn.onclick = () => location.reload();
    }

    // Background music control
    playBackgroundMusic() {
        try {
            if (!this.bgAudio) {
                this.bgAudio = new Audio('src/assets/background-music-by-suno.mp3');
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
        if (!this.isPaused && this.player && this.player.controls.isLocked) {
            // Execute updates with guarded logging to catch where errors originate
            try {
                this.player.update(cappedDt);
            } catch (err) {
                console.error('Error in player.update:', err);
            }

            try {
                const stormStatus = this.world.update(cappedDt, this.player.position);
                if (stormStatus && stormStatus.inStorm) {
                    this.player.takeDamage(1 * cappedDt); // Reduced damage: 1 per second
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
                this.itemManager.update();
            } catch (err) {
                console.error('Error in itemManager.update:', err);
            }

            try {
                this.hud.update();
            } catch (err) {
                console.error('Error in hud.update:', err);
            }

            // Check Victory
            try {
                if (this.enemyManager.enemies.length === 0 && !this.player.isDead) {
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
            } catch (logErr) {
                console.error('Error logging animate failure:', logErr);
            }
            throw err;
        }
    }

}

// Start the game
window.game = new Game();
