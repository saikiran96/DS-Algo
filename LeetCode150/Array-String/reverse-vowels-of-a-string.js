
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
        // Move left pointer until a vowel is found
        while (left < right && !isVowel(chars[left])) {
            left++;
        }

        // Move right pointer until a vowel is found
        while (left < right && !isVowel(chars[right])) {
            right--;
        }

        // If both pointers found vowels and haven't crossed, swap them
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
};
