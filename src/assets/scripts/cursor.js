/**
 * Sets up cursor movement effects by updating the position of a custom cursor.
 * Supports both mouse and touch events.
 *
 * @exports setupCursorMovement
 */
export function setupCursorMovement() {
    /**
     * Updates the position of the custom cursor based on mouse or touch events.
     *
     * @param {MouseEvent | TouchEvent} e - The event object representing the mouse or touch event.
     */
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
            document.documentElement.style.setProperty(
                '--x',
                x + window.scrollX + 'px',
            );
            document.documentElement.style.setProperty(
                '--y',
                y + window.scrollY + 'px',
            );
        }
    }

    /**
     * Hides the custom cursor when touch interaction ends.
     */
    function hideCursor() {
        document.documentElement.style.setProperty('--x', '-10000px');
        document.documentElement.style.setProperty('--y', '-10000px');
    }

    // Add event listeners for mouse and touch events.
    document.body.onmousemove = updatePosition;
    document.body.ontouchmove = updatePosition;
    document.body.ontouchstart = updatePosition;
    document.body.ontouchend = hideCursor;
}
