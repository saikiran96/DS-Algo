
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentVowels = 0;
    let maxVowels = 0;

    // Calculate vowels in the first window (s[0] to s[k-1])
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
    }
    maxVowels = currentVowels;

    // Slide the window
    for (let i = k; i < s.length; i++) {
        // Character leaving the window (s[i-k])
        if (vowels.has(s[i - k])) {
            currentVowels--;
        }
        // Character entering the window (s[i])
        if (vowels.has(s[i])) {
            currentVowels++;
        }
        maxVowels = Math.max(maxVowels, currentVowels);
    }

    return maxVowels;
};
