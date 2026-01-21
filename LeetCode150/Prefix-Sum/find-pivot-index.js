
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
        // The sum of elements to the right of index i is totalSum - leftSum - nums[i]
        // If leftSum == rightSum, then we found our pivot index
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        // Add the current element to leftSum for the next iteration
        leftSum += nums[i];
    }

    // If no pivot index is found after checking all elements
    return -1;
};
