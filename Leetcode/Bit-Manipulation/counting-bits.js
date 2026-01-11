
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        // The number of set bits in `i` can be found by looking at `i`'s
        // right-shifted version (`i >> 1`) and checking its least significant bit (`i & 1`).
        // `i >> 1` effectively removes the least significant bit.
        // `i & 1` is 0 if `i` is even, and 1 if `i` is odd.
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
};
