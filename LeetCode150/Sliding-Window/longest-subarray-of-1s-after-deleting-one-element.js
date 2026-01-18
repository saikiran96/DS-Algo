
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let zeros = 0;
    let maxLen = 0;
    const n = nums.length;

    for (let right = 0; right < n; right++) {
        // If the current element is 0, increment the zero count
        if (nums[right] === 0) {
            zeros++;
        }

        // If the window contains more than one zero,
        // shrink the window from the left until it has at most one zero
        while (zeros > 1) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }

        // At this point, the window [left, right] contains at most one zero.
        // We need to delete exactly one element.
        // If there's one zero in the window, we delete that zero.
        // If there are no zeros in the window (all ones), we delete one '1'.
        // In both cases, the length of the subarray of '1's after deletion will be
        // (current window size - 1).
        // Current window size = (right - left + 1).
        // Length after deletion = (right - left + 1) - 1 = right - left.
        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen;
};
