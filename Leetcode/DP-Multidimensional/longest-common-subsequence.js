
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // dp[i][j] will store the length of the longest common subsequence
    // of text1[0...i-1] and text2[0...j-1]
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // If the characters match, we add 1 to the LCS of the prefixes
                // excluding these characters.
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // If the characters don't match, we take the maximum of
                // LCS(text1[0...i-2], text2[0...j-1])
                // and LCS(text1[0...i-1], text2[0...j-2])
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The result is in the bottom-right cell
    return dp[m][n];
};
