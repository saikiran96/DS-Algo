
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;

    // Queue for BFS: stores [row, col, steps]
    const queue = [];
    queue.push([entrance[0], entrance[1], 0]);

    // Visited array to keep track of visited cells
    // Initialize with false, mark entrance as true initially
    const visited = Array(m).fill(0).map(() => Array(n).fill(false));
    visited[entrance[0]][entrance[1]] = true;

    // Directions for moving (up, down, left, right)
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    while (queue.length > 0) {
        const [r, c, steps] = queue.shift();

        // Explore all four possible neighbors
        for (let i = 0; i < 4; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            // Check boundary conditions
            if (newR >= 0 && newR < m && newC >= 0 && newC < n) {
                // Check if the cell is an empty path ('.') and has not been visited
                if (maze[newR][newC] === '.' && !visited[newR][newC]) {
                    // Check if this new cell is an exit
                    // An exit is on the border (row 0, row m-1, col 0, or col n-1)
                    // AND it is NOT the entrance cell itself.
                    if (
                        (newR === 0 || newR === m - 1 || newC === 0 || newC === n - 1) &&
                        !(newR === entrance[0] && newC === entrance[1])
                    ) {
                        return steps + 1; // Found the shortest path to an exit
                    }

                    // If not an exit, mark as visited and add to queue for further exploration
                    visited[newR][newC] = true;
                    queue.push([newR, newC, steps + 1]);
                }
            }
        }
    }

    // If the queue becomes empty and no exit was found, return -1
    return -1;
};
