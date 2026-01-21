
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const frequencyMap = new Map();

    // Step 1: Count the occurrences of each number
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Collect all the occurrence counts
    const occurrenceCounts = [];
    for (const count of frequencyMap.values()) {
        occurrenceCounts.push(count);
    }

    // Step 3: Check if these occurrence counts are unique
    const uniqueCounts = new Set(occurrenceCounts);

    // If the size of the Set of unique counts is equal to the total number of distinct counts,
    // then all counts are unique.
    return uniqueCounts.size === occurrenceCounts.length;
};
