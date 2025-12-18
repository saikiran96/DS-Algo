
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [];
    let i = 0;
    let j = 0;
    const len1 = word1.length;
    const len2 = word2.length;

    // Alternate merging as long as both strings have characters
    while (i < len1 && j < len2) {
        merged.push(word1[i]);
        merged.push(word2[j]);
        i++;
        j++;
    }

    // Append any remaining characters from word1
    while (i < len1) {
        merged.push(word1[i]);
        i++;
    }

    // Append any remaining characters from word2
    while (j < len2) {
        merged.push(word2[j]);
        j++;
    }

    return merged.join('');
};
