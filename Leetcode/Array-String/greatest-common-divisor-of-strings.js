
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // If str1 and str2 have a common divisor string 'x', then str1 = x + ... + x (k1 times)
    // and str2 = x + ... + x (k2 times).
    // In this case, str1 + str2 will be x repeated (k1 + k2) times,
    // and str2 + str1 will be x repeated (k2 + k1) times.
    // Thus, str1 + str2 must be equal to str2 + str1.
    // If they are not equal, no such common divisor string exists.
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Function to calculate the greatest common divisor (GCD) of two numbers
    // using the Euclidean algorithm.
    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };

    // If a common divisor string exists, its length must be the GCD of the lengths of str1 and str2.
    // For example, if str1 = "ABCABC" (length 6) and str2 = "ABC" (length 3), gcd(6, 3) = 3. The result is "ABC".
    // If str1 = "ABABAB" (length 6) and str2 = "ABAB" (length 4), gcd(6, 4) = 2. The result is "AB".
    const commonLength = gcd(str1.length, str2.length);

    // The result string is the prefix of str1 (or str2, as they would have the same prefix)
    // with the calculated commonLength.
    return str1.substring(0, commonLength);
};
