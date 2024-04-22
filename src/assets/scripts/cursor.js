export function setupCursorMovement() {
    function updatePosition(e) {
        var x = e.clientX || e.touches[0].clientX;
        var y = e.clientY || e.touches[0].clientY;

        document.documentElement.style.setProperty('--x', (x + window.scrollX) + 'px');
        document.documentElement.style.setProperty('--y', (y + window.scrollY) + 'px');
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