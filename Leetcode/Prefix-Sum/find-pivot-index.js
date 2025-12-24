
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        // The sum of numbers to the right of index i is totalSum - leftSum - nums[i]
        // where leftSum is the sum of numbers to the left of index i.
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};
