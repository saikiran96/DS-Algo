
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let flowersPlanted = 0;
    const len = flowerbed.length;

    for (let i = 0; i < len; i++) {
        // If current plot is empty
        if (flowerbed[i] === 0) {
            // Check left neighbor: true if it's the first plot or the left neighbor is empty
            const leftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            // Check right neighbor: true if it's the last plot or the right neighbor is empty
            const rightEmpty = (i === len - 1 || flowerbed[i + 1] === 0);

            // If both neighbors are empty (or out of bounds), we can plant a flower
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1; // Plant a flower (mark as occupied)
                flowersPlanted++;
                if (flowersPlanted >= n) {
                    return true; // We've planted enough flowers, no need to continue
                }
            }
        }
    }

    // After iterating through the entire flowerbed, return true if we've planted 'n' or more flowers
    return flowersPlanted >= n;
};
