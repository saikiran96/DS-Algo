
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles); // The maximum possible speed Koko might need is the size of the largest pile.
    let minK = high; // Initialize minK with a valid but potentially not optimal speed.

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2); // This is our candidate eating speed, k.

        let hoursTaken = 0;
        // Calculate the total hours Koko would take to eat all bananas at speed 'mid'.
        for (let pile of piles) {
            hoursTaken += Math.ceil(pile / mid);
        }

        if (hoursTaken <= h) {
            // If Koko can finish within 'h' hours at speed 'mid',
            // this 'mid' is a possible answer. We store it and try to find a smaller speed.
            minK = mid;
            high = mid - 1; // Look for a potentially smaller 'k' in the left half.
        } else {
            // If Koko cannot finish within 'h' hours at speed 'mid',
            // then 'mid' is too slow. We need a faster speed.
            low = mid + 1; // Look for a faster 'k' in the right half.
        }
    }

    return minK;
};
