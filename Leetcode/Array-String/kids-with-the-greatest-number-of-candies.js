
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxCandies) {
            maxCandies = candies[i];
        }
    }

    // A more concise way to find max:
    // const maxCandies = Math.max(...candies);

    const result = [];
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= maxCandies);
    }

    return result;
};
