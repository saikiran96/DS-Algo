
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = 0; // Pointer to place the next non-zero element

    // Iterate through the array with 'readPointer'
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        // If the element at 'readPointer' is non-zero
        if (nums[readPointer] !== 0) {
            // If 'readPointer' and 'writePointer' are different,
            // it means we found a non-zero element at 'readPointer' and
            // there's either a zero or another non-zero element (which is already in its correct place)
            // at 'writePointer'. To maintain relative order and move zeros, we swap.
            // The check 'readPointer !== writePointer' prevents unnecessary swaps
            // when the array segment before 'readPointer' has no zeros.
            if (readPointer !== writePointer) {
                let temp = nums[readPointer];
                nums[readPointer] = nums[writePointer];
                nums[writePointer] = temp;
            }
            // Increment 'writePointer' to prepare for the next non-zero element
            writePointer++;
        }
    }
};
