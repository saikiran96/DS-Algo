
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    function isVowel(char) {
        return vowels.has(char);
    }

    let currentVowels = 0;
    // Calculate vowels in the first window of size k
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            currentVowels++;
        }
    }

    let maxVowelsCount = currentVowels;

    // Slide the window across the string
    for (let i = k; i < s.length; i++) {
        // Remove the character that is leaving the window from the left
        if (isVowel(s[i - k])) {
            currentVowels--;
        }
        // Add the new character that is entering the window from the right
        if (isVowel(s[i])) {
            currentVowels++;
        }
        // Update the maximum vowel count found so far
        maxVowelsCount = Math.max(maxVowelsCount, currentVowels);
    }

    return maxVowelsCount;
};
