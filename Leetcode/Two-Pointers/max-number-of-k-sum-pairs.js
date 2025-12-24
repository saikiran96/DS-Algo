
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
        
        // If the complement exists in the map and its count is greater than 0,
        // it means we found a pair.
        if (freqMap.has(complement) && freqMap.get(complement) > 0) {
            operations++;
            freqMap.set(complement, freqMap.get(complement) - 1); // "Use" the complement
        } else {
            // Otherwise, store the current number in the map,
            // or increment its count if it's already there.
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
    }

    return operations;
};
