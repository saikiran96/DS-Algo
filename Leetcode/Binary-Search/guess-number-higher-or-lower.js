
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *			      0 if num is equal to the picked number
 * var guess = function(num) {};
 */

/**
 * @param {number} n
 * @return {number} pick
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let result = guess(mid);

        if (result === 0) {
            return mid;
        } else if (result === -1) {
            high = mid - 1;
        } else { // result === 1
            low = mid + 1;
        }
    }

    // This part should ideally not be reached given the problem constraints
    // that a number is always picked within the range.
    return -1; 
};
