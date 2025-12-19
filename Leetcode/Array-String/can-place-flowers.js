
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
        // If the current plot is empty (0)
        if (flowerbed[i] === 0) {
            // Check if the plot to the left is empty or if it's the first plot
            const isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            // Check if the plot to the right is empty or if it's the last plot
            const isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            // If both the current plot and its neighbors are empty, we can plant a flower
            if (isLeftEmpty && isRightEmpty) {
                flowerbed[i] = 1; // Plant the flower
                n--; // Decrement the number of flowers remaining to be planted
                if (n === 0) {
                    return true; // All required flowers have been planted
                }
            }
        }
    }

    // If the loop finishes and n is not 0, it means we couldn't plant all flowers
    return false;
};
