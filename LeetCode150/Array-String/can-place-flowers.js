
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) {
        return true;
    }

    for (let i = 0; i < flowerbed.length; i++) {
        // If the current plot is empty
        if (flowerbed[i] === 0) {
            // Check if the left neighbor is empty or if it's the first plot
            const leftIsEmpty = (i === 0 || flowerbed[i - 1] === 0);
            // Check if the right neighbor is empty or if it's the last plot
            const rightIsEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            // If both adjacent plots are empty (or at the boundary), we can plant a flower
            if (leftIsEmpty && rightIsEmpty) {
                flowerbed[i] = 1; // Plant the flower
                n--; // Decrement the count of flowers we still need to plant

                // If we have planted all required flowers, we can stop and return true
                if (n === 0) {
                    return true;
                }
            }
        }
    }

    // After iterating through the entire flowerbed,
    // if n is 0 or less, it means we successfully planted all flowers.
    return n <= 0;
};
