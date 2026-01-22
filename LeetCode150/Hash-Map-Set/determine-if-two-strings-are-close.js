
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // Condition 1: Strings must have the same length.
    if (word1.length !== word2.length) {
        return false;
    }

    // Initialize frequency arrays for lowercase English letters (a-z).
    // Each index corresponds to a letter (0 for 'a', 1 for 'b', etc.).
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    // Populate frequency arrays for both words.
    for (let i = 0; i < word1.length; i++) {
        freq1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Condition 2: Both strings must contain the exact same set of unique characters.
    // If a character exists in word1 (freq1[i] > 0), it must also exist in word2 (freq2[i] > 0), and vice versa.
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false; // A character is present in one string but not the other.
        }
    }

    // Condition 3: The multiset of character counts must be the same.
    // This means that if we sort the frequencies of characters for both words,
    // the sorted lists must be identical. Operation 2 allows us to relabel characters
    // with each other's counts, effectively shuffling the counts around, but
    // not changing the *set* of counts themselves.
    freq1.sort((a, b) => a - b); // Sort frequencies in ascending order.
    freq2.sort((a, b) => a - b); // Sort frequencies in ascending order.

    // Compare the sorted frequency arrays.
    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false; // The sorted counts are different.
        }
    }

    // If all checks pass, the strings are close.
    return true;
};
