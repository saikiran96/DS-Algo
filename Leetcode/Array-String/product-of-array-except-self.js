
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);

    // Pass 1: Calculate prefix products and store in the answer array.
    // At the end of this pass, answer[i] will contain the product of all elements to the left of index i.
    // For index 0, there are no elements to the left, so the product is 1.
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Pass 2: Calculate suffix products and multiply them with the prefix products already in the answer array.
    // This completes the calculation for each answer[i].
    // For index n-1, there are no elements to the right, so the suffix product starts at 1.
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return answer;
};
