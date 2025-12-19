
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0; // Pointer for writing compressed characters
    let read = 0;  // Pointer for reading original characters

    while (read < chars.length) {
        const currentChar = chars[read];
        let count = 0;

        // Count consecutive occurrences of currentChar
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        // Write the character
        chars[write] = currentChar;
        write++;

        // If count is greater than 1, write the count
        if (count > 1) {
            const countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[write] = countStr[i];
                write++;
            }
        }
    }

    return write; // The new length of the array
};
