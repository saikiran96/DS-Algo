
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIdx = 0; // Pointer for where to write the compressed characters
    let readIdx = 0;  // Pointer for reading the original characters

    while (readIdx < chars.length) {
        let currentChar = chars[readIdx];
        let count = 0;

        // Count consecutive occurrences of the current character
        while (readIdx < chars.length && chars[readIdx] === currentChar) {
            count++;
            readIdx++;
        }

        // Write the character itself
        chars[writeIdx] = currentChar;
        writeIdx++;

        // If count is greater than 1, write the count
        if (count > 1) {
            // Convert count to string and write each digit
            for (const digit of count.toString()) {
                chars[writeIdx] = digit;
                writeIdx++;
            }
        }
    }

    return writeIdx;
};
