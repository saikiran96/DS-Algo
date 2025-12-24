
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentVowels = 0;

    const isVowel = (char) => vowels.has(char);

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            currentVowels++;
        }
    }

    let maxVowels = currentVowels;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i - k])) {
            currentVowels--;
        }
        if (isVowel(s[i])) {
            currentVowels++;
        }
        maxVowels = Math.max(maxVowels, currentVowels);
    }

    return maxVowels;
};
