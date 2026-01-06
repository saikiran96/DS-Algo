
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const n = spells.length;
    const m = potions.length;
    const ans = new Array(n);

    for (let i = 0; i < n; i++) {
        const spell = spells[i];
        const target = success / spell;

        let low = 0;
        let high = m - 1;
        let firstSuccessfulPotionIndex = m;

        while (low <= high) {
            const mid = Math.floor(low + (high - low) / 2);
            if (potions[mid] >= target) {
                firstSuccessfulPotionIndex = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        ans[i] = m - firstSuccessfulPotionIndex;
    }

    return ans;
};
