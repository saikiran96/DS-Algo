
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    let prev_prev_max = 0; // Represents max money from houses up to i-2
    let prev_max = 0;      // Represents max money from houses up to i-1

    for (let i = 0; i < nums.length; i++) {
        // If we rob the current house (nums[i]):
        // We cannot rob the previous house, so we add nums[i] to the max money obtained up to i-2.
        let current_rob = nums[i] + prev_prev_max;

        // If we do NOT rob the current house (nums[i]):
        // The max money obtained up to the current house is simply the max money obtained up to i-1.
        let current_not_rob = prev_max;

        // The maximum for the current house is the greater of these two options.
        let current_max = Math.max(current_rob, current_not_rob);

        // Update for the next iteration:
        // The 'previous-previous' max becomes the 'previous' max.
        prev_prev_max = prev_max;
        // The 'previous' max becomes the 'current' max.
        prev_max = current_max;
    }

    // After iterating through all houses, prev_max will hold the total maximum money that can be robbed.
    return prev_max;
};
