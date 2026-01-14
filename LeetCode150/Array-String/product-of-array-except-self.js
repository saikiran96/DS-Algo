
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Calculate prefix products and store them in the answer array
    // answer[i] will contain the product of all elements to the left of nums[i]
    // For answer[0], there are no elements to the left, so it remains 1 (initialized value)
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // Calculate suffix products and multiply them with the existing prefix products
    // A variable `suffixProduct` will keep track of the product of elements to the right
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        // answer[i] now contains (product of elements to the left) * (product of elements to the right)
        answer[i] = answer[i] * suffixProduct;
        // Update suffixProduct for the next iteration (moving left)
        suffixProduct = suffixProduct * nums[i];
    }

    return answer;
};
