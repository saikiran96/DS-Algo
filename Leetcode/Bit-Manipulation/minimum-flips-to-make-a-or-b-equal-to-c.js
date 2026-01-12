
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flips = 0;

    // Iterate through bits as long as any of a, b, or c have remaining set bits
    while (a > 0 || b > 0 || c > 0) {
        // Get the least significant bit (LSB) for a, b, and c
        const bit_a = a & 1;
        const bit_b = b & 1;
        const bit_c = c & 1;

        if (bit_c === 0) {
            // If the target bit in c is 0, then both corresponding bits in a and b must be 0.
            // If bit_a is 1, we must flip it to 0.
            // If bit_b is 1, we must flip it to 0.
            flips += bit_a; // Adds 1 if bit_a is 1, 0 otherwise
            flips += bit_b; // Adds 1 if bit_b is 1, 0 otherwise
        } else { // bit_c === 1
            // If the target bit in c is 1, then at least one of the bits in a or b must be 1.
            // If both bit_a and bit_b are 0, we need to flip one of them to 1.
            if (bit_a === 0 && bit_b === 0) {
                flips += 1;
            }
            // If (bit_a | bit_b) is already 1 (i.e., at least one of bit_a or bit_b is 1),
            // no flips are needed for this bit position to achieve a 1.
        }

        // Right shift a, b, and c to process the next bit
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return flips;
};
