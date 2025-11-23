import * as THREE from 'three';
import defeatSfx from './assets/mixkit-player-losing-or-failing.mp3';
import victorySfx from './assets/game-level-completed-envato-mixkit.co.mp3';
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
        
        // Dashboard Elements
        this.fpsCounter = document.getElementById('fps-counter');
        this.enemyCount = document.getElementById('enemy-count');
        this.killCount = document.getElementById('kill-count');
        this.distanceTraveled = document.getElementById('distance-traveled');
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
        this.mouse = new THREE.Vector2();
        this.hoveredEnemy = null;
        this.currentOutlinedEnemy = null;
        this.hoverInfo = document.getElementById('hover-info');
        this.targetDistanceEl = document.getElementById('target-distance');
        this.minimapContainer = document.getElementById('minimap');
        this.minimapCanvas = document.getElementById('minimap-canvas');
        this.minimapCtx = this.minimapCanvas ? this.minimapCanvas.getContext('2d') : null;
        this.minimapSize = this.minimapCanvas ? this.minimapCanvas.width : 180;
        this.mapSize = (world && world.mapSize) ? world.mapSize : 200;

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
        });

        // Bind touch/click handlers for hotbar slots so mobile can switch weapons
        try {
            this.slots.forEach((slot, idx) => {
                const handle = (ev) => {
                    try {
                        ev.preventDefault && ev.preventDefault();
                        // Slots are 1-based in markup; weapons array is 0-based
                        if (this.player && typeof this.player.switchWeapon === 'function') {
                            this.player.switchWeapon(idx);
                        }
                    } catch (e) {}
                };
                slot.addEventListener('pointerdown', handle);
                // also support touchstart for older browsers
                slot.addEventListener('touchstart', handle, { passive: false });
            });
        } catch (e) {}
    }

    update() {
        // Reset hoveredEnemy at the start of each frame to prevent sticky targeting
        this.hoveredEnemy = null;

        // Outline overlay for hovered NPC: create/remove a separate highlight group so we don't modify original materials
                if (this.player && this.player.enemyManager && this.player.enemyManager.enemies.length > 0) {
                    // If hovered enemy changed, remove previous outline and create a new one
                    if (this.currentOutlinedEnemy !== this.hoveredEnemy) {
                        // Remove outline from previous
                        if (this.currentOutlinedEnemy && this.currentOutlinedEnemy._outline) {
                            try {
                                this.currentOutlinedEnemy.mesh.remove(this.currentOutlinedEnemy._outline);
                            } catch (e) {}
                            this.currentOutlinedEnemy._outline = null;
                        }

                        // Create outline for new hovered enemy
                        if (this.hoveredEnemy && this.hoveredEnemy.mesh) {
                            const outlineGroup = new THREE.Group();
                            // For each mesh child, create a simple scaled MeshBasicMaterial mesh
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
                            // Attach outline to the enemy mesh so it follows animations/position
                            this.hoveredEnemy.mesh.add(outlineGroup);
                            this.hoveredEnemy._outline = outlineGroup;
                        }

                        this.currentOutlinedEnemy = this.hoveredEnemy;
                    }
                }
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

        // Distance traveled (convert meters to kilometers)
        const distanceKm = (this.player.distanceTraveled / 1000).toFixed(2);
        if (this.distanceTraveled) this.distanceTraveled.innerText = distanceKm;

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

        // Debug per‑object labels (controlled only by showRenderedIds)
        const showRenderedIds = !!this.settings.showRenderedIds;
        if (showRenderedIds && this.debugContainer) {
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

        // Hover info above crosshair
        let hoveredDistNum = null;
        // If mouse-based hover didn't find an enemy, try a center-screen raycast
        if (!this.hoveredEnemy && this.player && this.player.enemyManager && this.player.enemyManager.enemies.length > 0) {
            const allEnemyMeshes = [];
            this.player.enemyManager.enemies.forEach(enemy => {
                enemy.mesh.traverse(child => {
                    if (child.isMesh) allEnemyMeshes.push(child);
                });
            });
            if (allEnemyMeshes.length > 0) {
                // Raycast from center of screen
                this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.player.camera);
                const centerIntersects = this.raycaster.intersectObjects(allEnemyMeshes, true);
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
        if (this.hoverInfo) {
            if (this.hoveredEnemy) {
                const mesh = this.hoveredEnemy.mesh ? this.hoveredEnemy.mesh : (this.hoveredEnemy.isMesh ? this.hoveredEnemy : null) || this.hoveredEnemy;
                const id = (mesh && mesh.userData && (mesh.userData.gameId || mesh.userData.gameid)) ? (mesh.userData.gameId || mesh.userData.gameid) : '---';
                const enemyPos = (this.hoveredEnemy.position) ? this.hoveredEnemy.position : (mesh ? mesh.position : null);
                hoveredDistNum = enemyPos ? this.player.position.distanceTo(enemyPos) : null;
                const dist = hoveredDistNum ? hoveredDistNum.toFixed(2) : '---';
                this.hoverInfo.innerText = `${id} • ${dist}m`;
            } else {
                this.hoverInfo.innerText = '';
            }
        }

        // Crosshair color: red if within weapon range, yellow if visible but out of range, always update every frame
        const crosshair = document.getElementById('crosshair');
        if (crosshair) {
            crosshair.classList.remove('target-red', 'target-yellow');
            const weapon = this.player.weapons && this.player.weapons[this.player.currentWeaponIndex];
            const weaponRange = weapon && weapon.range ? weapon.range : 1000;
            if (this.hoveredEnemy && hoveredDistNum !== null) {
                if (hoveredDistNum <= weaponRange) {
                    crosshair.classList.add('target-red');
                } else {
                    crosshair.classList.add('target-yellow');
                }
            }
        }

        // Optionally show target distance in top-left (dashboard)
        if (this.targetDistanceEl) {
            const showTarget = !!this.settings.showTargetDistance;
            if (showTarget && this.hoveredEnemy) {
                const mesh = this.hoveredEnemy.mesh ? this.hoveredEnemy.mesh : (this.hoveredEnemy.isMesh ? this.hoveredEnemy : null) || this.hoveredEnemy;
                const enemyPos = (this.hoveredEnemy.position) ? this.hoveredEnemy.position : (mesh ? mesh.position : null);
                const dist = enemyPos ? this.player.position.distanceTo(enemyPos).toFixed(2) : '---';
                this.targetDistanceEl.innerText = `${dist}`;
            } else {
                this.targetDistanceEl.innerText = '---';
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
        // Reset flag to allow showGameOver to run
        this.gameOverShown = false;
        this.showGameOver("VICTORY ROYALE!");
        document.getElementById('game-over-title').style.color = '#f1c40f'; // Gold color
        
        // Hide touch controls on victory
        try {
            const touchControls = document.getElementById('touch-controls');
            if (touchControls) {
                touchControls.style.display = 'none';
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
    }
}
