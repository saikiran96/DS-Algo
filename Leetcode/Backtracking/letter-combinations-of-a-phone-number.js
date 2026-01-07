
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let combinations = [""];

    for (const digit of digits) {
        const letters = mapping[digit];
        const newCombinations = [];

        for (const existingCombination of combinations) {
            for (const letter of letters) {
                newCombinations.push(existingCombination + letter);
            }
        }
        combinations = newCombinations;
    }

    return combinations;
};
