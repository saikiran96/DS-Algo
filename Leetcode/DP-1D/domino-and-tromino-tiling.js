
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 10**9 + 7;

    // Base case: for n=1, there is only one way (a vertical domino).
    if (n === 1) {
        return 1;
    }

    // We use dynamic programming with two states:
    // dp[i]: number of ways to tile a 2xi board completely.
    // dp_odd[i]: number of ways to tile a 2xi board with one cell missing in the i-th column.
    //            (e.g., the top cell of column i is missing, due to symmetry this is equivalent
    //            to the bottom cell being missing).

    // The recurrence relations are:
    // dp[i] = dp[i-1] + dp[i-2] + 2 * dp_odd[i-1]
    // dp_odd[i] = dp_odd[i-1] + dp[i-2]

    // Base values for our states (conceptual dp[0] and dp[1]):
    // dp[0] = 1 (empty board, one way to tile)
    // dp[1] = 1 (one vertical domino)
    // dp_odd[0] = 0 (no way to have a gap in an empty board)
    // dp_odd[1] = 0 (a 2x1 board cannot have a gap if it's to be tiled by trominos/dominos in this manner)

    // To optimize space to O(1), we only need to keep track of the last two dp values
    // and the last dp_odd value.
    // f_i_minus_2 corresponds to dp[i-2]
    // f_i_minus_1 corresponds to dp[i-1]
    // g_i_minus_1 corresponds to dp_odd[i-1]

    let f_i_minus_2 = 1; // Represents dp[0]
    let f_i_minus_1 = 1; // Represents dp[1]
    let g_i_minus_1 = 0; // Represents dp_odd[1] (dp_odd[0] is 0 but not directly needed as g_i_minus_1 for i=2 depends on dp_odd[1])

    // Iterate from i = 2 up to n
    for (let i = 2; i <= n; i++) {
        // Calculate the current dp[i] value
        let f_i = (f_i_minus_1 + f_i_minus_2 + 2 * g_i_minus_1) % MOD;

        // Calculate the current dp_odd[i] value
        let g_i = (g_i_minus_1 + f_i_minus_2) % MOD;

        // Update values for the next iteration
        f_i_minus_2 = f_i_minus_1;
        f_i_minus_1 = f_i;
        g_i_minus_1 = g_i;
    }

    // After the loop, f_i_minus_1 will hold the result for dp[n]
    return f_i_minus_1;
};
