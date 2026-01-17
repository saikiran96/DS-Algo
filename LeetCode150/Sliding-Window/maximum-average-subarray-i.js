
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentSum = 0;
    
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    
    let maxSum = currentSum;
    
    // Slide the window through the rest of the array
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k]; // Add new element, remove old element
        maxSum = Math.max(maxSum, currentSum); // Update maxSum if current window sum is greater
    }
    
    return maxSum / k;
};
