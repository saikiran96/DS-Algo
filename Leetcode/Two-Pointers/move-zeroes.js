
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = 0; // Pointer to place the next non-zero element

    // Iterate through the array with a read pointer
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        // If the current element is non-zero, place it at the writePointer position
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer];
            writePointer++; // Increment writePointer to prepare for the next non-zero element
        }
    }

    // After moving all non-zero elements to the front,
    // fill the remaining positions from writePointer to the end with zeros
    for (let i = writePointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};
