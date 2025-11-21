import * as THREE from 'three';
export class HUD {
    constructor(player, settings) {
        this.player = player;
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
        
        // Dashboard Elements
        this.fpsCounter = document.getElementById('fps-counter');
        this.enemyCount = document.getElementById('enemy-count');
        this.killCount = document.getElementById('kill-count');
        this.memoryUsage = document.getElementById('memory-usage');

        // Debug Elements
        this.debugInfo = document.getElementById('debug-info');
        this.debugName = document.getElementById('debug-target-name');
        this.debugId = document.getElementById('debug-target-id');

        if (this.settings.debugMode) {
            this.debugInfo.style.display = 'block';
        } else {
            this.debugInfo.style.display = 'none';
        }

        // Storm Timer
        this.timeRemaining = 30; // seconds
        this.lastTime = performance.now();
        this.frames = 0; // Used for FPS calculation
        this.fps = 0;
        this.lastFpsTime = performance.now(); // For FPS calculation

        this.raycaster = new THREE.Raycaster();
    }

    update() {
        // Dashboard
        this.frames++;
        const now = performance.now();
        if (now - this.lastFpsTime >= 1000) {
            this.fpsCounter.innerText = this.frames;
            this.frames = 0;
            this.lastFpsTime = now;
            
            if (performance.memory) {
                this.memoryUsage.innerText = Math.round(performance.memory.usedJSHeapSize / 1048576);
            }
        }

        if (this.player.enemyManager) {
            this.enemyCount.innerText = this.player.enemyManager.enemies.length;
            this.killCount.innerText = this.player.enemyManager.killedCount || 0;
        }

        // Stats
        this.healthBar.style.width = `${this.player.health}%`;
        this.healthText.innerText = Math.ceil(this.player.health);
        
        this.shieldBar.style.width = `${this.player.shield}%`;
        this.shieldText.innerText = Math.ceil(this.player.shield);
        
        // Stamina
        this.staminaBar.style.width = `${this.player.stamina}%`;
        this.staminaText.innerText = Math.ceil(this.player.stamina);

        // Weapon
        const weapon = this.player.weapons[this.player.currentWeaponIndex];
        this.weaponName.innerText = weapon.name;
        
        if (this.player.isReloading) {
            this.ammoCount.innerText = "RELOADING...";
        } else {
            this.ammoCount.innerText = weapon.ammo === Infinity ? '∞' : `${weapon.currentMag} / ${weapon.ammo}`;
        }

        // Debug per‑object labels (only when debug mode is active)
        if (this.settings.debugMode && this.debugContainer) {
            // Clear previous labels
            this.debugContainer.innerHTML = '';
            const objects = this.player.worldObjects || [];
            objects.forEach(obj => {
                if (!obj.userData) return;
                const pos = obj.position.clone();
                pos.project(this.player.camera);
                const x = (pos.x + 1) / 2 * window.innerWidth;
                const y = (-pos.y + 1) / 2 * window.innerHeight;
                const div = document.createElement('div');
                div.className = 'debug-label';
                div.style.position = 'absolute';
                div.style.left = `${x}px`;
                div.style.top = `${y}px`;
                div.innerText = `${obj.userData.gameName}: ${obj.userData.gameId}`;
                this.debugContainer.appendChild(div);
            });
        } else if (this.debugContainer) {
            this.debugContainer.innerHTML = '';
        }

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

        // Timer
        const currentTime = performance.now();
        if (currentTime - this.lastTime > 1000) {
            this.timeRemaining--;
            if (this.timeRemaining < 0) this.timeRemaining = 0;
            
            const minutes = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
            const seconds = (this.timeRemaining % 60).toString().padStart(2, '0');
            this.timerValue.innerText = `${minutes}:${seconds}`;
            
            this.lastTime = currentTime;
        }

        // Game Over
        if (this.player.isDead) {
            this.showGameOver("YOU DIED");
        }
    }

    showGameOver(message) {
        this.gameOverScreen.classList.remove('hidden');
        document.getElementById('game-over-title').innerText = message;
        
        // Simple restart logic
        document.getElementById('restart-btn').onclick = () => {
            location.reload();
        };
    }

    showVictory() {
        this.showGameOver("VICTORY ROYALE!");
        document.getElementById('game-over-title').style.color = '#f1c40f'; // Gold color
    }
}

