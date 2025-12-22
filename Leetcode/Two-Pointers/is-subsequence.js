
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0; // Pointer for string s
    let j = 0; // Pointer for string t

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // Move s pointer only if a match is found
        }
        j++; // Always move t pointer
    }

    // If i has reached the end of s, it means all characters of s were found in t in order
    return i === s.length;
};
