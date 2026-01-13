
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [];
    let i = 0;
    const minLength = Math.min(word1.length, word2.length);

    // Merge alternately up to the length of the shorter string
    while (i < minLength) {
        merged.push(word1[i]);
        merged.push(word2[i]);
        i++;
    }

    // Append the rest of word1, if any
    if (i < word1.length) {
        merged.push(word1.substring(i));
    }

    // Append the rest of word2, if any
    if (i < word2.length) {
        merged.push(word2.substring(i));
    }

    return merged.join('');
};
