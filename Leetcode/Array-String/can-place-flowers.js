
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        // If all flowers are planted, we can stop early
        if (n <= 0) {
            return true;
        }

        // Check if the current plot is empty
        if (flowerbed[i] === 0) {
            // Check left neighbor
            // A plot's left neighbor is empty if it's the first plot (i === 0)
            // or if the plot to its left (flowerbed[i - 1]) is 0.
            const leftEmpty = (i === 0 || flowerbed[i - 1] === 0);

            // Check right neighbor
            // A plot's right neighbor is empty if it's the last plot (i === flowerbed.length - 1)
            // or if the plot to its right (flowerbed[i + 1]) is 0.
            const rightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            // If both neighbors are empty, we can plant a flower here
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1; // Mark as planted to affect subsequent checks
                n--; // Decrement the count of flowers to plant
            }
        }
    }

    // After iterating through the entire flowerbed,
    // return true if all 'n' flowers have been planted, false otherwise.
    return n <= 0;
};
