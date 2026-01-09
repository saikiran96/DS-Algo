
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;

    // We use two variables to store the minimum cost to reach the previous two stairs.
    // 'first' will store dp[i-2] (min cost to reach stair i-2)
    // 'second' will store dp[i-1] (min cost to reach stair i-1)

    // Base cases:
    // To reach stair 0 and step on it, the cost is cost[0].
    // To reach stair 1 and step on it, the cost is cost[1].
    let first = cost[0];
    let second = cost[1];

    // Iterate from the third stair (index 2) up to the last stair (index n-1)
    for (let i = 2; i < n; i++) {
        // The minimum cost to reach the current stair (i)
        // is its own cost plus the minimum cost to reach either
        // the stair i-1 or stair i-2.
        let currentCost = cost[i] + Math.min(first, second);

        // Update 'first' and 'second' for the next iteration:
        // 'first' becomes the old 'second' (which was dp[i-1])
        // 'second' becomes the 'currentCost' (which is dp[i])
        first = second;
        second = currentCost;
    }

    // After the loop, 'second' holds the minimum cost to reach the last stair (n-1),
    // and 'first' holds the minimum cost to reach the second-to-last stair (n-2).
    // To reach the "top of the floor" (one step beyond the last stair),
    // we can either step from stair n-1 or from stair n-2.
    // The minimum cost will be the minimum of these two options.
    return Math.min(first, second);
};
