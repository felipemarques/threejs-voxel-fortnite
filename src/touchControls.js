import * as THREE from 'three';

export class TouchControls {
    constructor(player, options = {}) {
        this.player = player;
        this.container = document.getElementById('touch-controls');
        this.enabled = true;
        this.layout = (options && options.layout) ? options.layout : {};
        this._cleanupExistingControls();
        this.isEditing = false;
        this.buttonHelpers = new Map();
        this._suppressDragUntil = 0;

        // Create joystick (left)
        this.joystick = document.createElement('div');
        this.joystick.className = 'tc-joystick';
        this.joystick.style.zIndex = '210'; // Ensure above look area

        this.stick = document.createElement('div');
        this.stick.className = 'tc-stick';
        this.joystick.appendChild(this.stick);
        
        // Right joystick removed in favor of full screen drag area (Free Fire style)

        // Buttons (right)
        this.buttons = document.createElement('div');
        this.buttons.className = 'tc-buttons';
        this.buttons.style.zIndex = '210'; // Ensure above look area

        this.fireBtn = document.createElement('button');
        this.fireBtn.className = 'tc-btn tc-btn-fire';
        this.fireBtn.innerText = 'FIRE';

        this.jumpBtn = document.createElement('button');
        this.jumpBtn.className = 'tc-btn';
        this.jumpBtn.innerText = 'JUMP';

        this.sprintBtn = document.createElement('button');
        this.sprintBtn.className = 'tc-btn';
        this.sprintBtn.innerText = 'SPRINT';
        
        this.interactBtn = document.createElement('button');
        this.interactBtn.className = 'tc-btn tc-interact-btn';
        this.interactBtn.innerText = 'E';
        this.interactBtn.style.display = 'none'; // Hidden by default
        
        this.crouchBtn = document.createElement('button');
        this.crouchBtn.className = 'tc-btn';
        this.crouchBtn.innerText = 'CROUCH';
        this.crouchBtn.style.fontSize = '16px';

        this.buttons.appendChild(this.fireBtn);
        this.buttons.appendChild(this.jumpBtn);
        this.buttons.appendChild(this.sprintBtn);
        this.buttons.appendChild(this.crouchBtn);
        this.buttons.appendChild(this.interactBtn);

        // Add to container
        this.container.appendChild(this.joystick);
        // this.container.appendChild(this.lookJoystick); // Removed
        this.container.appendChild(this.buttons);
        this.container.classList.remove('hidden');
        this.applyLayout();
        this._initDragHandles();

        // State
        this.active = false;
        this.startPos = null;
        this.currentPos = { x: 0, y: 0 };
        
        this.lookActive = false;
        this.lookStartPos = null;

        // Bind events
        this._bindJoystick();
        // this._bindLookJoystick(); // Removed
        this._bindButtons();
        this._bindLookArea(); // Keep full screen area for broad swipes if missed joystick
        this._setupEditToggleGesture();

        // Default sensitivity
        this.deadZone = 10; // px
        this.maxRadius = 50; // px

        // Keep pointer actions from scrolling page
        document.body.style.touchAction = 'none';

        // Notify player that touch movement is available
        try { if (this.player) this.player.allowTouchMovement = true; } catch (e) {}
    }

    // Dispatch a global touch-look event for camera rotation (dx, dy in pixels)
    _dispatchTouchLook(dx, dy) {
        try {
            window.dispatchEvent(new CustomEvent('game-touch-look', { detail: { dx, dy } }));
        } catch (e) {}
    }

    destroy() {
        try {
            this.container.classList.add('hidden');
            this.destroyLookArea();
            this.container.removeChild(this.joystick);
            // this.container.removeChild(this.lookJoystick); // Removed
            this.container.removeChild(this.buttons);
            document.body.style.touchAction = '';
            if (this.player) this.player.allowTouchMovement = false;
        } catch (e) {}
    }

    applyLayout() {
        const jl = this.layout.joystickLeft !== undefined ? this.layout.joystickLeft : 10;
        const jb = this.layout.joystickBottom !== undefined ? this.layout.joystickBottom : 12;
        const br = this.layout.buttonsRight !== undefined ? this.layout.buttonsRight : 8;
        const bb = this.layout.buttonsBottom !== undefined ? this.layout.buttonsBottom : 12;
        const gapVh = this.layout.buttonGapVh !== undefined ? this.layout.buttonGapVh : (14 / window.innerHeight * 100);

        // Default positions for each button (stacked)
        if (!this.layout.buttonPositions) this.layout.buttonPositions = {};
        const ensureButtonPos = (key, offset) => {
            if (!this.layout.buttonPositions[key]) {
                this.layout.buttonPositions[key] = {
                    right: br,
                    bottom: bb + gapVh * offset
                };
            }
        };
        ensureButtonPos('fire', 0);
        ensureButtonPos('jump', 1);
        ensureButtonPos('sprint', 2);
        ensureButtonPos('crouch', 3);
        ensureButtonPos('interact', 4);

        this.joystick.style.left = `${jl}vw`;
        this.joystick.style.bottom = `${jb}vh`;
        // Buttons container spans the screen but doesn't intercept events; individual buttons are positioned absolutely
        this.buttons.style.position = 'absolute';
        this.buttons.style.top = '0';
        this.buttons.style.left = '0';
        this.buttons.style.right = '0';
        this.buttons.style.bottom = '0';
        this.buttons.style.display = 'block';
        this.buttons.style.pointerEvents = 'none';

        const applyBtnPos = (btn, key) => {
            const pos = this.layout.buttonPositions[key];
            if (!pos) return;
            btn.style.position = 'absolute';
            btn.style.right = `${pos.right}vw`;
            btn.style.bottom = `${pos.bottom}vh`;
            btn.style.pointerEvents = 'auto';
        };
        applyBtnPos(this.fireBtn, 'fire');
        applyBtnPos(this.jumpBtn, 'jump');
        applyBtnPos(this.sprintBtn, 'sprint');
        applyBtnPos(this.crouchBtn, 'crouch');
        applyBtnPos(this.interactBtn, 'interact');
    }

    _cleanupExistingControls() {
        if (!this.container) return;
        const existing = this.container.querySelectorAll('.tc-joystick, .tc-buttons, .tc-look-area');
        existing.forEach((el) => {
            try { el.parentNode.removeChild(el); } catch (e) {}
        });
    }

    _initDragHandles() {
        const loadLayout = () => {
            try {
                const raw = localStorage.getItem('touch-layout');
                if (raw) {
                    const parsed = JSON.parse(raw);
                    this.layout = { ...this.layout, ...parsed };
                }
            } catch (e) {}
        };
        const saveLayout = () => {
            try {
                localStorage.setItem('touch-layout', JSON.stringify(this.layout));
            } catch (e) {}
        };
        loadLayout();
        this.applyLayout();

        const makeDraggable = (el, axis) => {
            let dragging = false;
            let startX = 0, startY = 0;
            const dragThreshold = 10; // px before we start moving the control
            const onMove = (ev) => {
                const touch = ev.touches ? ev.touches[0] : ev;
                if (!dragging) {
                    const dx = touch.clientX - startX;
                    const dy = touch.clientY - startY;
                    if (Math.sqrt(dx * dx + dy * dy) < dragThreshold) return;
                    dragging = true;
                }
                if (axis === 'left') {
                    const vw = (touch.clientX / window.innerWidth) * 100;
                    this.layout.joystickLeft = Math.max(0, Math.min(80, vw));
                    const vh = (window.innerHeight - touch.clientY) / window.innerHeight * 100;
                    this.layout.joystickBottom = Math.max(0, Math.min(80, vh));
                } else {
                    const vw = (window.innerWidth - touch.clientX) / window.innerWidth * 100;
                    this.layout.buttonsRight = Math.max(0, Math.min(80, vw));
                    const vh = (window.innerHeight - touch.clientY) / window.innerHeight * 100;
                    this.layout.buttonsBottom = Math.max(0, Math.min(80, vh));
                }
                this.applyLayout();
                ev.preventDefault && ev.preventDefault();
            };
            const endDrag = () => {
                if (dragging) {
                    dragging = false;
                    saveLayout();
                }
                document.removeEventListener('touchmove', onMove, { passive: false });
                document.removeEventListener('touchend', endDrag);
                document.removeEventListener('pointermove', onMove);
                document.removeEventListener('pointerup', endDrag);
            };
            const startDrag = (ev) => {
                if (!this.isEditing || this._shouldSuppressDrag()) return;
                if (ev.touches && ev.touches.length > 1) return;
                const touch = ev.touches ? ev.touches[0] : ev;
                startX = touch.clientX;
                startY = touch.clientY;
                dragging = false;
                document.addEventListener('touchmove', onMove, { passive: false });
                document.addEventListener('touchend', endDrag);
                document.addEventListener('pointermove', onMove);
                document.addEventListener('pointerup', endDrag);
            };
            el.addEventListener('touchstart', startDrag, { passive: true });
            el.addEventListener('pointerdown', startDrag);
        };

        makeDraggable(this.joystick, 'left');

        const makeButtonDraggable = (btn, key) => {
            let dragging = false;
            let startX = 0;
            let startY = 0;
            const dragThreshold = 10; // px movement before starting drag
            const onMove = (ev) => {
                if (!dragging) return;
                const touch = ev.touches ? ev.touches[0] : ev;
                const vw = (window.innerWidth - touch.clientX) / window.innerWidth * 100;
                const vh = (window.innerHeight - touch.clientY) / window.innerHeight * 100;
                if (!this.layout.buttonPositions) this.layout.buttonPositions = {};
                this.layout.buttonPositions[key] = {
                    right: Math.max(0, Math.min(90, vw)),
                    bottom: Math.max(0, Math.min(90, vh))
                };
                this.applyLayout();
                ev.preventDefault && ev.preventDefault();
            };
            const endDrag = () => {
                if (dragging) {
                    dragging = false;
                    saveLayout();
                }
                document.removeEventListener('touchmove', onMove, { passive: false });
                document.removeEventListener('touchend', endDrag);
                document.removeEventListener('pointermove', onMove);
                document.removeEventListener('pointerup', endDrag);
            };
            const startDrag = (ev) => {
                if (!this.isEditing || this._shouldSuppressDrag()) return;
                if (ev.touches && ev.touches.length > 1) return;
                const touch = ev.touches ? ev.touches[0] : ev;
                startX = touch.clientX;
                startY = touch.clientY;
                dragging = false;
                document.addEventListener('touchmove', onMove, { passive: false });
                document.addEventListener('touchend', endDrag);
                document.addEventListener('pointermove', onMove);
                document.addEventListener('pointerup', endDrag);
            };
            btn.addEventListener('touchstart', startDrag, { passive: true });
            btn.addEventListener('pointerdown', startDrag);

            // Make sure we only start dragging after exceeding threshold
            btn.addEventListener('touchmove', (ev) => {
                if (!this.isEditing || this._shouldSuppressDrag() || dragging) return;
                const touch = ev.touches ? ev.touches[0] : ev;
                const dx = touch.clientX - startX;
                const dy = touch.clientY - startY;
                if (Math.sqrt(dx * dx + dy * dy) > dragThreshold) {
                    dragging = true;
                }
            }, { passive: true });
            btn.addEventListener('pointermove', (ev) => {
                if (ev.pointerType !== 'touch') return;
                if (!this.isEditing || this._shouldSuppressDrag() || dragging) return;
                const dx = ev.clientX - startX;
                const dy = ev.clientY - startY;
                if (Math.sqrt(dx * dx + dy * dy) > dragThreshold) {
                    dragging = true;
                }
            });
        };

        makeButtonDraggable(this.fireBtn, 'fire');
        makeButtonDraggable(this.jumpBtn, 'jump');
        makeButtonDraggable(this.sprintBtn, 'sprint');
        makeButtonDraggable(this.crouchBtn, 'crouch');
        makeButtonDraggable(this.interactBtn, 'interact');
    }

    _bindJoystick() {
        this.joystick.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const t = e.changedTouches[0];
            const rect = this.joystick.getBoundingClientRect();
            this.startPos = { x: t.clientX, y: t.clientY };
            this.active = true;
        });

        this.joystick.addEventListener('touchmove', (e) => {
            if (!this.active) return;
            e.preventDefault();
            const t = e.changedTouches[0];
            const dx = t.clientX - this.startPos.x;
            const dy = t.clientY - this.startPos.y;

            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            const r = Math.min(this.maxRadius, dist);
            const nx = Math.cos(angle) * r;
            const ny = Math.sin(angle) * r;
            this.stick.style.transform = `translate(${nx}px, ${ny}px)`;

            // Map to movement booleans on player
            const normX = dx / this.maxRadius;
            const normY = dy / this.maxRadius;

            // Up is negative Y in screen coordinates - map accordingly
            this.player.moveForward = normY < -0.3;
            this.player.moveBackward = normY > 0.3;
            this.player.moveLeft = normX < -0.3;
            this.player.moveRight = normX > 0.3;

            // optional analog speed/sprint handling
            // this.player.isSprinting = Math.abs(normY) > 0.9;
        });

        const release = (e) => {
            if (!this.active) return;
            e.preventDefault();
            this.active = false;
            this.startPos = null;
            this.stick.style.transform = `translate(0,0)`;
            this.player.moveForward = false;
            this.player.moveBackward = false;
            this.player.moveLeft = false;
            this.player.moveRight = false;
        };

        this.joystick.addEventListener('touchend', release);
        this.joystick.addEventListener('touchcancel', release);
    }

    // _bindLookJoystick removed

    _bindButtons() {
        // Fire: continuous touch = continuous shooting
        let fireInterval = null;
        let fireHoldTimer = null;
        const stopFireInterval = () => {
            if (fireInterval) {
                clearInterval(fireInterval);
                fireInterval = null;
            }
        };
        this._stopFireInterval = stopFireInterval;
        this.fireBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.isEditing) return;
            stopFireInterval();
            if (fireHoldTimer) { clearTimeout(fireHoldTimer); fireHoldTimer = null; }
            if (this.player && typeof this.player.shoot === 'function') {
                this.player.shoot();
                // Start auto-fire interval only if touch is held for a short duration
                fireHoldTimer = setTimeout(() => {
                    fireInterval = setInterval(() => {
                        if (this.player && typeof this.player.shoot === 'function') this.player.shoot();
                    }, 150);
                }, 220);
            }
        });
        const endFire = (e) => {
            if (e && e.preventDefault) e.preventDefault();
            if (this.isEditing) return;
            if (fireHoldTimer) { clearTimeout(fireHoldTimer); fireHoldTimer = null; }
            stopFireInterval();
        };
        this.fireBtn.addEventListener('touchend', endFire);
        this.fireBtn.addEventListener('touchcancel', endFire);
        this.fireBtn.addEventListener('pointerup', (e) => { if (e.pointerType === 'touch') endFire(e); });
        this.fireBtn.addEventListener('pointercancel', (e) => { if (e.pointerType === 'touch') endFire(e); });
        this.fireBtn.addEventListener('mouseup', endFire);
        // Safety: stop firing if finger leaves the button area
        this.fireBtn.addEventListener('mouseleave', endFire);

        // Jump
        this.jumpBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.isEditing) return;
            if (this.player) {
                if (this.player.canJump === true) {
                    this.player.velocity.y += this.player.jumpHeight;
                    this.player.canJump = false;
                }
            }
        });

        // Sprint (toggle while pressed)
        this.sprintBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.isEditing) return;
            if (this.player) {
                if (this.player.stamina <= 0) {
                    this.player.isSprinting = false;
                } else {
                    this.player.isSprinting = !this.player.isSprinting;
                }
                this._updateSprintButton();
            }
        });
        
        // Interact button
        this.interactBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.isEditing) return;
            // Trigger interaction with items
            if (window.game && window.game.itemManager) {
                window.game.itemManager.tryInteract();
            }
        });
        
        // Crouch button (toggle)
        this.crouchBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this.isEditing) return;
            if (this.player) {
                this.player.isCrouching = !this.player.isCrouching;
                // Update button appearance
                this.crouchBtn.style.background = this.player.isCrouching ? 
                    'rgba(52, 152, 219, 0.9)' : 'rgba(241, 196, 15, 0.9)';
            }
        });
    }
    
    update() {
        // Show/hide interact button based on nearby items
        if (window.game && window.game.itemManager && window.game.itemManager.currentItem) {
            this.interactBtn.style.display = 'block';
        } else {
            this.interactBtn.style.display = 'none';
        }

        // Auto-disable sprint if stamina ran out
        try {
            if (this.player && this.player.stamina !== undefined) {
                if (this.player.isSprinting && this.player.stamina <= 0) {
                    this.player.isSprinting = false;
                }
                this._updateSprintButton();
            }
        } catch (e) {}
    }

    destroyLookArea() {
        try {
            if (this.lookArea && this.container && this.lookArea.parentElement === this.container) {
                this.container.removeChild(this.lookArea);
            }
        } catch (e) {}
        this.lookArea = null;
    }

    rebuildLookArea() {
        this.destroyLookArea();
        this._bindLookArea();
    }

    _bindLookArea() {
        try {
            if (this.lookArea) {
                try { this.container.removeChild(this.lookArea); } catch (e) {}
            }
            // Create an invisible touch area on the right side for camera look control
            this.lookArea = document.createElement('div');
            this.lookArea.className = 'tc-look-area';
            // inline styles to ensure it doesn't block buttons (lower z-index)
            this.lookArea.style.position = 'absolute';
            this.lookArea.style.top = '0';
            this.lookArea.style.bottom = '0';
            this.lookArea.style.right = '0';
            this.lookArea.style.left = '0'; // Full width
            this.lookArea.style.width = '100%';
            this.lookArea.style.zIndex = '190'; // Below controls
            //this.lookArea.style.background = 'rgba(241, 196, 15, 0.1)';
            this.lookArea.style.background = 'transparent';
            this.lookArea.style.touchAction = 'none';
            this.lookArea.style.pointerEvents = 'auto'; // Force capture events
            this.container.appendChild(this.lookArea);

            let lookTouchId = null;
            let lastX = 0;
            let lastY = 0;

            this.lookArea.addEventListener('touchstart', (e) => {
                // If we already have a finger controlling look, ignore new ones
                if (lookTouchId !== null) return;

                // Find a touch that is NOT on the joystick/buttons (though z-index should handle this, explicit check is safer)
                // Since lookArea is behind, we just take the first changed touch that bubbled here
                const touch = e.changedTouches[0];
                lookTouchId = touch.identifier;
                lastX = touch.clientX;
                lastY = touch.clientY;
                // Don't preventDefault here if we want clicks to pass through, but for game control we usually want to prevent scrolling
                if (e.cancelable) e.preventDefault();
            }, { passive: false });

            this.lookArea.addEventListener('touchmove', (e) => {
                if (lookTouchId === null) return;
                if (e.cancelable) e.preventDefault();

                // Find the specific touch we are tracking
                for (let i = 0; i < e.changedTouches.length; i++) {
                    if (e.changedTouches[i].identifier === lookTouchId) {
                        const t = e.changedTouches[i];
                        const dx = t.clientX - lastX;
                        const dy = t.clientY - lastY;
                        lastX = t.clientX;
                        lastY = t.clientY;
                        this._dispatchTouchLook(dx, dy);
                        break;
                    }
                }
            }, { passive: false });

            const release = (e) => {
                if (lookTouchId === null) return;
                for (let i = 0; i < e.changedTouches.length; i++) {
                    if (e.changedTouches[i].identifier === lookTouchId) {
                        lookTouchId = null;
                        break;
                    }
                }
            };

            this.lookArea.addEventListener('touchend', release);
            this.lookArea.addEventListener('touchcancel', release);

        } catch (e) {}
    }

    _getButtons() {
        return [this.fireBtn, this.jumpBtn, this.sprintBtn, this.crouchBtn, this.interactBtn];
    }

    _getEditToggleTargets() {
        // Exclude fire button so rapid taps to shoot don't toggle edit mode
        return [this.jumpBtn, this.sprintBtn, this.crouchBtn, this.interactBtn];
    }

    _setupEditToggleGesture() {
        let tapCount = 0;
        let lastTapTs = 0;
        const tapWindow = 700; // ms for triple tap

        const onTouchStart = (e) => {
            if (e.touches && e.touches.length >= 2) {
                // Two-finger tap toggles edit instantly
                e.preventDefault();
                e.stopPropagation();
                tapCount = 0;
                this._suppressDrag();
                this._toggleEditMode();
            }
        };

        const onTouchEnd = (e) => {
            const now = performance.now();
            if (now - lastTapTs < tapWindow) {
                tapCount += 1;
            } else {
                tapCount = 1;
            }
            lastTapTs = now;
            if (tapCount >= 3) {
                e.preventDefault();
                e.stopPropagation();
                tapCount = 0;
                this._suppressDrag();
                this._toggleEditMode();
            }
        };

        this._getEditToggleTargets().forEach((btn) => {
            btn.addEventListener('touchstart', onTouchStart, { passive: false });
            btn.addEventListener('touchend', onTouchEnd, { passive: false });
            btn.addEventListener('touchcancel', () => { tapCount = 0; }, { passive: true });
            btn.addEventListener('pointerdown', (ev) => {
                // Pointer events do not give multiple touches directly; rely on touch for multi-finger
                if (ev.pointerType !== 'touch') return;
            });
        });
    }

    _updateSprintButton() {
        if (!this.player) return;
        const isOn = !!this.player.isSprinting;
        this.sprintBtn.style.background = isOn ?
            'rgba(46, 204, 113, 0.9)' : 'rgba(241, 196, 15, 0.9)';
    }

    _toggleEditMode() {
        if (this.isEditing) {
            this._exitEditMode();
        } else {
            this._enterEditMode();
        }
    }

    _enterEditMode() {
        this.isEditing = true;
        if (typeof this._stopFireInterval === 'function') this._stopFireInterval();
        this._showButtonHelpers();
        this._suppressDrag();
    }

    _exitEditMode() {
        this.isEditing = false;
        this._hideButtonHelpers();
    }

    _showButtonHelpers() {
        this._getButtons().forEach((btn) => {
            btn.classList.add('tc-btn-editing');
            let helper = this.buttonHelpers.get(btn);
            if (!helper) {
                helper = document.createElement('div');
                helper.className = 'tc-btn-helper';
                helper.style.position = 'absolute';
                helper.style.inset = '-8px';
                helper.style.border = '2px dashed rgba(255, 255, 255, 0.75)';
                helper.style.borderRadius = '22px';
                helper.style.pointerEvents = 'none';
                helper.style.boxShadow = '0 0 12px rgba(255, 255, 255, 0.5)';
                helper.style.animation = 'tc-btn-helper-pulse 1.6s ease-in-out infinite';
                helper.style.opacity = '0.9';
                this.buttonHelpers.set(btn, helper);
            }
            if (!btn.contains(helper)) {
                helper.setAttribute('aria-hidden', 'true');
                btn.appendChild(helper);
            }
        });
    }

    _hideButtonHelpers() {
        this._getButtons().forEach((btn) => {
            btn.classList.remove('tc-btn-editing');
            const helper = this.buttonHelpers.get(btn);
            if (helper && helper.parentNode === btn) {
                btn.removeChild(helper);
            }
        });
    }

    _suppressDrag(duration = 450) {
        this._suppressDragUntil = performance.now() + duration;
    }

    _shouldSuppressDrag() {
        return performance.now() < this._suppressDragUntil;
    }
}
