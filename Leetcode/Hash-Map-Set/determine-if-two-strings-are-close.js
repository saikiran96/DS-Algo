
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        freq1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Condition 1: Both strings must have the exact same set of characters present.
    // If a character exists in word1 but not word2, or vice versa, they can't be close.
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    // Condition 2: The multiset of frequencies must be the same.
    // This means the sorted list of non-zero frequencies must be identical.
    const nonZeroFreq1 = [];
    const nonZeroFreq2 = [];

    for (let i = 0; i < 26; i++) {
        if (freq1[i] > 0) {
            nonZeroFreq1.push(freq1[i]);
        }
        if (freq2[i] > 0) {
            nonZeroFreq2.push(freq2[i]);
        }
    }

    nonZeroFreq1.sort((a, b) => a - b);
    nonZeroFreq2.sort((a, b) => a - b);

    // Compare the sorted frequency arrays
    for (let i = 0; i < nonZeroFreq1.length; i++) {
        if (nonZeroFreq1[i] !== nonZeroFreq2[i]) {
            return false;
        }
    }

    return true;
};
