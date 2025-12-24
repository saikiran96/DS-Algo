
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const rowFrequencies = new Map();

    // Step 1: Store frequencies of each row
    // Convert each row array into a string to use as a map key
    for (let i = 0; i < n; i++) {
        const rowString = JSON.stringify(grid[i]);
        rowFrequencies.set(rowString, (rowFrequencies.get(rowString) || 0) + 1);
    }

    let count = 0;

    // Step 2: Iterate through columns, construct them, and check against row frequencies
    for (let j = 0; j < n; j++) {
        const currentColumn = [];
        // Construct the current column
        for (let i = 0; i < n; i++) {
            currentColumn.push(grid[i][j]);
        }
        // Convert the column array into a string
        const columnString = JSON.stringify(currentColumn);
        
        // If this column string exists as a row string, add its frequency to the total count
        if (rowFrequencies.has(columnString)) {
            count += rowFrequencies.get(columnString);
        }
    }

    return count;
};
