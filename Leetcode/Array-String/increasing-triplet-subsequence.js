
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let num1 = Infinity;
    let num2 = Infinity;

    for (let num of nums) {
        if (num <= num1) {
            // This 'num' is a potential new smallest first element
            num1 = num;
        } else if (num <= num2) {
            // This 'num' is larger than num1 but a potential new smallest second element
            num2 = num;
        } else {
            // This 'num' is larger than both num1 and num2,
            // so we found an increasing triplet (num1 < num2 < num)
            return true;
        }
    }

    // No increasing triplet was found
    return false;
};
