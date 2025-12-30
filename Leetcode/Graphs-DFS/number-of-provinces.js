
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    let provinces = 0;
    const visited = new Array(n).fill(false);

    // DFS function to explore all connected cities from a given city
    function dfs(city) {
        visited[city] = true; // Mark the current city as visited

        // Iterate through all other cities
        for (let neighbor = 0; neighbor < n; neighbor++) {
            // If there's a connection and the neighbor hasn't been visited
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor); // Recursively visit the neighbor
            }
        }
    }

    // Iterate through all cities
    for (let i = 0; i < n; i++) {
        // If a city hasn't been visited yet, it means it's part of a new province
        // So, we increment the province count and start a DFS from this city
        // to mark all cities in this province as visited.
        if (!visited[i]) {
            provinces++;
            dfs(i);
        }
    }

    return provinces;
};
