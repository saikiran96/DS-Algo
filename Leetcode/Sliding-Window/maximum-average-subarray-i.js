
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // Calculate the sum of the first k elements
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let maxSum = currentSum;

    // Slide the window through the rest of the array
    for (let i = k; i < nums.length; i++) {
        // Add the new element entering the window (nums[i])
        // Subtract the element leaving the window (nums[i - k])
        currentSum = currentSum + nums[i] - nums[i - k];
        
        // Update maxSum if the current window sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    // The maximum average is the maxSum divided by k
    return maxSum / k;
};
