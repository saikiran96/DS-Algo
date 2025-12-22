
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let operations = 0;
    const counts = new Map();

    for (const num of nums) {
        const complement = k - num;
        if (counts.has(complement) && counts.get(complement) > 0) {
            // Found a pair!
            operations++;
            counts.set(complement, counts.get(complement) - 1);
        } else {
            // No complement found, or complement count is 0.
            // Store or increment the current number's count.
            counts.set(num, (counts.get(num) || 0) + 1);
        }
    }

    return operations;
};
