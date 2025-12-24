
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let maxLen = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        // If the current element is 0, increment zeroCount
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If zeroCount exceeds 1, shrink the window from the left
        // until zeroCount is 1 or 0 again.
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // At this point, the window [left, right] contains at most one zero.
        // We need to find the length of the longest subarray of 1s after deleting one element.
        //
        // Case 1: The window contains exactly one zero (zeroCount === 1).
        // Deleting this zero merges the ones before it with the ones after it.
        // The length of this subarray of 1s will be (right - left + 1) - 1 = (right - left).
        //
        // Case 2: The window contains no zeros (zeroCount === 0).
        // We must delete one '1' from this window.
        // The length of this subarray of 1s will be (right - left + 1) - 1 = (right - left).
        //
        // Both cases simplify to (right - left) as the length of 1s after deletion.
        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen;
};
