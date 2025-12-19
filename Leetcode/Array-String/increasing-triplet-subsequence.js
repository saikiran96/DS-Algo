
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstMin = Infinity;
    let secondMin = Infinity;

    for (let num of nums) {
        if (num <= firstMin) {
            // This number could be the new smallest first element
            firstMin = num;
        } else if (num <= secondMin) {
            // This number is greater than firstMin, but could be the new smallest second element
            secondMin = num;
        } else {
            // This number is greater than secondMin, which means we have found
            // firstMin < secondMin < num
            return true;
        }
    }

    // No increasing triplet found
    return false;
};
