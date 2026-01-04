
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Sort the array in descending order.
    // The comparison function (a, b) => b - a ensures descending order.
    nums.sort((a, b) => b - a);

    // The k-th largest element will be at index k-1 (since arrays are 0-indexed).
    return nums[k - 1];
};
