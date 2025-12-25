
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let ast of asteroids) {
        let destroyed = false; // Flag to indicate if the current 'ast' has been destroyed

        // Check for collisions:
        // Condition 1: There are asteroids on the stack
        // Condition 2: The current asteroid 'ast' is moving left (negative)
        // Condition 3: The asteroid on top of the stack is moving right (positive)
        while (stack.length > 0 && ast < 0 && stack[stack.length - 1] > 0) {
            const topAst = stack[stack.length - 1]; // The asteroid on top of the stack

            if (topAst < Math.abs(ast)) {
                // The current asteroid 'ast' is larger; it destroys the top asteroid.
                stack.pop(); // Remove the smaller asteroid from the stack.
                // 'ast' continues to potentially collide with the next asteroid on the stack.
            } else if (topAst === Math.abs(ast)) {
                // Both asteroids are of the same size; they both destroy each other.
                stack.pop(); // Remove the top asteroid from the stack.
                destroyed = true; // Mark 'ast' as destroyed, so it's not pushed.
                break; // 'ast' is destroyed, no further collisions for it.
            } else { // topAst > Math.abs(ast)
                // The asteroid on top of the stack is larger; it destroys the current 'ast'.
                destroyed = true; // Mark 'ast' as destroyed, so it's not pushed.
                break; // 'ast' is destroyed, no further collisions for it.
            }
        }

        // If 'ast' was not destroyed during collisions, push it onto the stack.
        // This includes cases where:
        // 1. 'ast' is moving right (positive).
        // 2. 'ast' is moving left, but the stack is empty.
        // 3. 'ast' is moving left, but the top of the stack is also moving left (no collision).
        if (!destroyed) {
            stack.push(ast);
        }
    }

    return stack;
};
