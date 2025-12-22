
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const freqMap = new Map();
    let operations = 0;

    for (const num of nums) {
        const complement = k - num;

        if (freqMap.has(complement) && freqMap.get(complement) > 0) {
            operations++;
            freqMap.set(complement, freqMap.get(complement) - 1);
        } else {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
    }

    return operations;
};
