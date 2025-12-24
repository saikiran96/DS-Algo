
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        // If the current element is a zero, increment zeroCount
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If the number of zeros in the current window exceeds k,
        // shrink the window from the left until it's valid again
        while (zeroCount > k) {
            // If the element leaving the window from the left is a zero, decrement zeroCount
            if (nums[left] === 0) {
                zeroCount--;
            }
            // Move the left pointer to shrink the window
            left++;
        }

        // The current window [left, right] is valid (has at most k zeros).
        // Calculate its length and update maxLen if it's greater.
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
