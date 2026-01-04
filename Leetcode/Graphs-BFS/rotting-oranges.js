
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshOranges = 0;
    let maxTime = 0;

    // Initialize queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); // [row, col, time]
            } else if (grid[r][c] === 1) {
                freshOranges++;
            }
        }
    }

    // Directions for BFS (up, down, left, right)
    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    let head = 0; // Pointer for queue (to simulate shift)
    while (head < queue.length) {
        const [r, c, time] = queue[head++];
        maxTime = Math.max(maxTime, time);

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Check boundaries and if the neighbor is a fresh orange
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2; // Mark as rotten
                freshOranges--;
                queue.push([nr, nc, time + 1]);
            }
        }
    }

    // If any fresh oranges remain, they could not be rotten
    return freshOranges === 0 ? maxTime : -1;
};
