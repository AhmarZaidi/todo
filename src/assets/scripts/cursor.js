export function setupCursorMovement() {
    function updatePosition(e) {
        let x, y;

        if (e.touches && e.touches.length > 0) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else if (e.clientX && e.clientY) {
            x = e.clientX;
            y = e.clientY;
        }

        if (typeof x === 'number' && typeof y === 'number') {
            document.documentElement.style.setProperty('--x', (x + window.scrollX) + 'px');
            document.documentElement.style.setProperty('--y', (y + window.scrollY) + 'px');
        }
    }

    function hideCursor() {
        document.documentElement.style.setProperty('--x', '-10000px');
        document.documentElement.style.setProperty('--y', '-10000px');
    }

    document.body.onmousemove = updatePosition;
    document.body.ontouchmove = updatePosition;
    document.body.ontouchstart = updatePosition;
    document.body.ontouchend = hideCursor;
}