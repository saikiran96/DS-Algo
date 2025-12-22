
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let maxSum = currentSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        // Subtract the element leaving the window
        // Add the new element entering the window
        currentSum = currentSum - nums[i - k] + nums[i];
        
        // Update maxSum if currentSum is greater
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum / k;
};
