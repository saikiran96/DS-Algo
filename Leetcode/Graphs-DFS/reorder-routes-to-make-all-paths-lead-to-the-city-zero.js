
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    // Build an adjacency list to represent the graph.
    // For each connection [u, v] (meaning u -> v originally):
    // Add [v, 1] to adj[u]. The '1' signifies that an original road goes from u to v.
    // Add [u, 0] to adj[v]. The '0' signifies that an original road goes from u away from v (i.e., v <- u).
    // This allows us to traverse the graph as if it were undirected for search,
    // while keeping track of the original direction of the edges.
    const adj = new Array(n).fill(0).map(() => []);
    for (const [u, v] of connections) {
        adj[u].push([v, 1]); // Original edge u -> v
        adj[v].push([u, 0]); // Original edge v <- u
    }

    let reversals = 0;
    const visited = new Array(n).fill(false);

    // Perform a Depth-First Search (DFS) starting from city 0.
    // The goal is to orient all roads such that every city can reach city 0.
    // This is equivalent to ensuring that for any path starting from 0, say 0 -> ... -> u -> v,
    // the edge u -> v should be reversed to v -> u if it was originally u -> v.
    // This is because we want v to be able to reach u (and eventually 0).
    function dfs(node) {
        visited[node] = true;

        for (const [neighbor, type] of adj[node]) {
            if (!visited[neighbor]) {
                // If 'type' is 1, it means the original connection was `node -> neighbor`.
                // For `neighbor` to be able to reach `node` (and subsequently `0`),
                // this edge must be reversed from `node -> neighbor` to `neighbor -> node`.
                // Therefore, we increment the `reversals` count.
                if (type === 1) {
                    reversals++;
                }
                // Recursively call DFS for the neighbor, effectively traversing the graph
                // as if it were undirected to reach all connected components from 0.
                dfs(neighbor);
            }
        }
    }

    // Start the DFS from city 0.
    dfs(0);

    return reversals;
};
