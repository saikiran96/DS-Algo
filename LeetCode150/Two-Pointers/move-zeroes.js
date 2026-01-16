
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroPointer = 0;

    // Iterate through the array with 'i'
    for (let i = 0; i < nums.length; i++) {
        // If the current element nums[i] is not zero
        if (nums[i] !== 0) {
            // If 'i' is not the same as 'nonZeroPointer', it means we found a non-zero element
            // at a position 'i' that is further than where the next non-zero element should be.
            // This implies there's at least one zero between 'nonZeroPointer' and 'i'.
            // In this case, we swap the non-zero element nums[i] with the element at nums[nonZeroPointer]
            // (which would be a zero, or a non-zero already in its "final" position relative to previous elements).
            // If i === nonZeroPointer, it means nums[i] is a non-zero element already in its correct place
            // relative to previously processed elements, so no swap is needed.
            if (i !== nonZeroPointer) {
                // Swap nums[i] and nums[nonZeroPointer] using destructuring assignment
                [nums[nonZeroPointer], nums[i]] = [nums[i], nums[nonZeroPointer]];
            }
            // Increment nonZeroPointer to point to the next available position for a non-zero element
            nonZeroPointer++;
        }
    }
};
