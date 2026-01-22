
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const rowCounts = new Map();
    let pairs = 0;

    // Count frequencies of each row
    for (let r = 0; r < n; r++) {
        const rowString = grid[r].join(',');
        rowCounts.set(rowString, (rowCounts.get(rowString) || 0) + 1);
    }

    // Iterate through columns and check against row frequencies
    for (let c = 0; c < n; c++) {
        const currentCol = [];
        for (let r = 0; r < n; r++) {
            currentCol.push(grid[r][c]);
        }
        const colString = currentCol.join(',');
        if (rowCounts.has(colString)) {
            pairs += rowCounts.get(colString);
        }
    }

    return pairs;
};
