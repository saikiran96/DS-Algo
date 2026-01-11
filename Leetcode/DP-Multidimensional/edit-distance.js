
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // dp[i][j] will be the minimum number of operations required to convert
    // word1[0...i-1] to word2[0...j-1]
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Base cases:
    // If word1 is empty, we need to insert all characters of word2
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // If word2 is empty, we need to delete all characters of word1
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // Characters match, no operation needed for this pair
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Characters do not match, we need one operation
                // Take the minimum of three possibilities:
                // 1. Delete character from word1 (dp[i-1][j])
                // 2. Insert character into word1 (dp[i][j-1])
                // 3. Replace character in word1 (dp[i-1][j-1])
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],      // Deletion
                    dp[i][j - 1],      // Insertion
                    dp[i - 1][j - 1]   // Replacement
                );
            }
        }
    }

    return dp[m][n];
};
