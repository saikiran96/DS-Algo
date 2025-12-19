
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIdx = 0; // Pointer for writing compressed characters
    let readIdx = 0;  // Pointer for reading original characters

    while (readIdx < chars.length) {
        let currentChar = chars[readIdx];
        let count = 0;

        // Count consecutive occurrences of currentChar
        while (readIdx < chars.length && chars[readIdx] === currentChar) {
            count++;
            readIdx++;
        }

        // Write the character
        chars[writeIdx] = currentChar;
        writeIdx++;

        // If count is greater than 1, write the count
        if (count > 1) {
            // Convert count to string and write each digit
            const countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIdx] = countStr[i];
                writeIdx++;
            }
        }
    }

    return writeIdx;
};
