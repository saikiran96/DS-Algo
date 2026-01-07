
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const currentCombination = [];

    /**
     * @param {number} remainingK The number of elements still needed for the combination.
     * @param {number} remainingN The target sum that still needs to be achieved.
     * @param {number} startNum The starting number for the current selection (to ensure unique combinations and avoid duplicates).
     */
    function backtrack(remainingK, remainingN, startNum) {
        // Base cases

        // If the remaining sum becomes negative, this path is invalid.
        if (remainingN < 0) {
            return;
        }

        // If we have picked 'k' numbers (remainingK is 0).
        if (remainingK === 0) {
            // If the sum is also exactly 'n', we found a valid combination.
            if (remainingN === 0) {
                result.push([...currentCombination]); // Add a copy of the combination to the results.
            }
            return; // Regardless of sum, we've picked k elements, so stop this path.
        }

        // Recursive step
        // Iterate through numbers from `startNum` to 9.
        // Optimization: The loop limit `9 - (remainingK - 1)` ensures that there are enough distinct
        // numbers left (from `i+1` to `9`) to pick the `remainingK - 1` elements.
        // For example, if remainingK is 3, i can go up to 7 (to pick 7, 8, 9).
        // If remainingK is 1, i can go up to 9.
        for (let i = startNum; i <= 9 - (remainingK - 1); i++) {
            currentCombination.push(i); // Add the current number to the combination
            backtrack(remainingK - 1, remainingN - i, i + 1); // Recurse with decremented k and n, and next startNum
            currentCombination.pop(); // Backtrack: remove the number to explore other combinations
        }
    }

    // Start the backtracking process
    // k: initial number of elements to pick
    // n: initial target sum
    // 1: numbers must be picked from 1 to 9, so start with 1
    backtrack(k, n, 1);

    return result;
};
