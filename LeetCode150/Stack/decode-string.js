
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];    // Stack to store repetition counts
    let strStack = [];    // Stack to store strings built *before* a '['
    let currentString = ""; // String being built for the current level
    let currentNum = 0;   // Number being built for the current repetition count

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char >= '0' && char <= '9') {
            // If it's a digit, update currentNum
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            // If it's an opening bracket:
            // 1. Push the current accumulated string onto strStack
            // 2. Push the current repetition count onto numStack
            // 3. Reset currentString and currentNum for the new nested level
            strStack.push(currentString);
            numStack.push(currentNum);
            currentString = "";
            currentNum = 0;
        } else if (char === ']') {
            // If it's a closing bracket:
            // 1. Pop the last repetition count from numStack
            // 2. Pop the previous string from strStack
            // 3. Repeat the currentString (content inside the brackets) by the popped count
            // 4. Prepend the previous string to the repeated string and update currentString
            let prevNum = numStack.pop();
            let prevString = strStack.pop();
            currentString = prevString + currentString.repeat(prevNum);
        } else {
            // If it's a letter, append it to the currentString
            currentString += char;
        }
    }

    return currentString;
};
