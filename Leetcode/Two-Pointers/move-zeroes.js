
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writePointer] = nums[i];
            writePointer++;
        }
    }

    for (let i = writePointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};
