
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];    // Stores numbers (multipliers)
    let strStack = [];    // Stores strings accumulated before a '['
    let currentNum = 0;   // Accumulates digits to form a number
    let currentString = ""; // Builds the string within the current bracket level or the final result

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            // If it's a digit, append it to currentNum
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            // If it's an opening bracket, it means we are starting a new nested string.
            // Push the current accumulated string onto strStack, as it's the prefix for the new segment.
            strStack.push(currentString);
            // Push the current accumulated number onto numStack, as it's the multiplier for the new segment.
            numStack.push(currentNum);
            // Reset currentString and currentNum for the new segment.
            currentString = "";
            currentNum = 0;
        } else if (char === ']') {
            // If it's a closing bracket, we've finished a segment.
            // Pop the last multiplier and previous string from the stacks.
            let num = numStack.pop();
            let prevString = strStack.pop();
            // Repeat the currentString 'num' times and append it to the prevString.
            // This becomes the new currentString, effectively joining the decoded segment with its prefix.
            currentString = prevString + currentString.repeat(num);
        } else {
            // If it's a letter, append it to the currentString.
            currentString += char;
        }
    }

    return currentString;
};
