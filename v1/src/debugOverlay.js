// Simple Debug Overlay: captures console logs, window.onerror, and unhandledrejection
// Exports a factory `createDebugOverlay({ maxLines, autoShow })` which returns
// an object { show(), hide(), destroy(), logs }.

export function createDebugOverlay({ maxLines = 400, autoShow = false } = {}) {
    const logs = [];
    const orig = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console)
    };

    // Create DOM
    const container = document.createElement('div');
    container.id = 'debug-overlay';
    container.className = 'debug-overlay hidden';

    const header = document.createElement('div');
    header.className = 'debug-overlay-header';
    header.innerHTML = '<strong>DEBUG</strong>';

    const actions = document.createElement('div');
    actions.className = 'debug-overlay-actions';
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    actions.appendChild(copyBtn);
    actions.appendChild(clearBtn);
    actions.appendChild(closeBtn);
    header.appendChild(actions);

    const list = document.createElement('div');
    list.className = 'debug-overlay-list';

    container.appendChild(header);
    container.appendChild(list);
    document.body.appendChild(container);

    // Initial placement is handled by CSS (centered)

    // Make the header draggable (pointer events) so users can move the overlay on touch/desktop
    header.style.cursor = 'move';
    let dragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    function onPointerMove(e) {
        if (!dragging) return;
        const nx = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, e.clientX - dragOffsetX));
        const ny = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, e.clientY - dragOffsetY));
        container.style.left = nx + 'px';
        container.style.top = ny + 'px';
        container.style.right = 'auto';
    }

    function onPointerUp(e) {
        dragging = false;
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        try { if (e && e.pointerId) container.releasePointerCapture && container.releasePointerCapture(e.pointerId); } catch (err) {}
    }

    header.addEventListener('pointerdown', (e) => {
        try {
            const rect = container.getBoundingClientRect();
            // convert to fixed left/top so we can reposition
            container.style.left = rect.left + 'px';
            container.style.top = rect.top + 'px';
            container.style.position = 'fixed';
            container.style.transform = 'none'; // Remove centering transform
            container.style.right = 'auto';
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            dragging = true;
            window.addEventListener('pointermove', onPointerMove);
            window.addEventListener('pointerup', onPointerUp);
            try { container.setPointerCapture && container.setPointerCapture(e.pointerId); } catch (err) {}
        } catch (err) {}
    }, { passive: false });

    function render() {
        // Keep latest at bottom
        list.innerHTML = '';
        const start = Math.max(0, logs.length - maxLines);
        for (let i = start; i < logs.length; i++) {
            const li = document.createElement('div');
            li.className = 'debug-line debug-' + logs[i].level;
            const time = new Date(logs[i].ts).toLocaleTimeString();
            // use pre-formatted single-line text so horizontal scroll shows full messages
            li.textContent = `[${time}] ${logs[i].level.toUpperCase()}: ${logs[i].msg}`;
            list.appendChild(li);
        }
        // scroll to bottom
        list.scrollTop = list.scrollHeight;
    }

    function push(level, args) {
        try {
            const msg = args.map(a => {
                try { return typeof a === 'string' ? a : JSON.stringify(a); } catch (e) { return String(a); }
            }).join(' ');
            logs.push({ level, msg, ts: Date.now() });
            if (logs.length > maxLines * 2) logs.splice(0, logs.length - maxLines * 2);
            render();
        } catch (e) { /* ignore overlay errors */ }
    }

    // Patch console methods
    console.log = function(...a) { orig.log(...a); push('log', a); };
    console.info = function(...a) { orig.info(...a); push('info', a); };
    console.warn = function(...a) { orig.warn(...a); push('warn', a); };
    console.error = function(...a) { orig.error(...a); push('error', a); };

    // Capture global errors
    function onWindowError(evOrMsg, source, lineno, colno, error) {
        if (typeof evOrMsg === 'string') {
            push('error', [evOrMsg + ' ' + (source || '') + ':' + (lineno || '?')]);
        } else if (evOrMsg && evOrMsg.message) {
            push('error', [evOrMsg.message, evOrMsg.error || error]);
        }
    }

    function onUnhandledRejection(e) {
        try { push('error', ['UnhandledRejection', e && e.reason ? e.reason : e]); } catch (err) {}
    }

    window.addEventListener('error', onWindowError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    copyBtn.addEventListener('click', () => {
        try {
            // Create text from all logs
            const text = logs.map(log => {
                const time = new Date(log.ts).toLocaleTimeString();
                return `[${time}] ${log.level.toUpperCase()}: ${log.msg}`;
            }).join('\n');
            
            // Use textarea fallback (works in HTTP)
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            textarea.style.top = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 1000);
                } else {
                    copyBtn.textContent = 'Failed';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 1000);
                }
            } catch (err) {
                console.error('execCommand failed:', err);
                copyBtn.textContent = 'Error';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 1000);
            } finally {
                document.body.removeChild(textarea);
            }
        } catch (e) {
            console.error('Copy failed:', e);
        }
    });
    clearBtn.addEventListener('click', () => { logs.length = 0; render(); });
    closeBtn.addEventListener('click', () => hide());

    function show() { container.classList.remove('hidden'); }
    function hide() { container.classList.add('hidden'); }

    if (autoShow) show();

    return {
        show,
        hide,
        destroy() {
            // restore console and listeners
            console.log = orig.log; console.info = orig.info; console.warn = orig.warn; console.error = orig.error;
            window.removeEventListener('error', onWindowError);
            window.removeEventListener('unhandledrejection', onUnhandledRejection);
            try { container.remove(); } catch (e) {}
        },
        logs
    };
}
