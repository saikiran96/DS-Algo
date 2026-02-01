
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        let shouldPush = true;

        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];

            if (Math.abs(asteroid) > top) {
                stack.pop();
            } else if (Math.abs(asteroid) < top) {
                shouldPush = false;
                break;
            } else { // Math.abs(asteroid) === top
                stack.pop();
                shouldPush = false;
                break;
            }
        }

        if (shouldPush) {
            stack.push(asteroid);
        }
    }

    return stack;
};
