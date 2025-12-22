
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const chars = s.split('');
    let left = 0;
    let right = chars.length - 1;

    const isVowel = (char) => {
        const lowerChar = char.toLowerCase();
        return lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u';
    };

    while (left < right) {
        while (left < right && !isVowel(chars[left])) {
            left++;
        }
        while (left < right && !isVowel(chars[right])) {
            right--;
        }

        if (left < right) {
            // Swap characters
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
};
