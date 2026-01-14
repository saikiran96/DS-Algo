
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) {
        return false;
    }

    let firstNum = Infinity;  // Smallest number found so far
    let secondNum = Infinity; // Smallest number found so far that is greater than firstNum

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (currentNum <= firstNum) {
            // currentNum is smaller than or equal to the smallest number found.
            // Update firstNum to potentially find an even smaller start for the triplet.
            firstNum = currentNum;
        } else if (currentNum <= secondNum) {
            // currentNum is greater than firstNum but smaller than or equal to secondNum.
            // Update secondNum to find a potentially smaller middle number for the triplet.
            secondNum = currentNum;
        } else {
            // currentNum is greater than secondNum.
            // Since firstNum < secondNum (by definition when secondNum was set)
            // and secondNum < currentNum, we have found an increasing triplet:
            // firstNum < secondNum < currentNum.
            return true;
        }
    }

    // No increasing triplet found after iterating through the entire array.
    return false;
};
