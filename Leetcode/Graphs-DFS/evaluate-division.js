
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // Step 1: Build the graph
    // The graph will store adjacency lists where each entry is
    // `dividend -> { divisor: value }`
    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [dividend, divisor] = equations[i];
        const value = values[i];

        // Ensure both dividend and divisor nodes exist in the graph
        if (!graph.has(dividend)) {
            graph.set(dividend, new Map());
        }
        if (!graph.has(divisor)) {
            graph.set(divisor, new Map());
        }

        // Add directed edges for both `dividend / divisor = value`
        // and `divisor / dividend = 1 / value`
        graph.get(dividend).set(divisor, value);
        graph.get(divisor).set(dividend, 1 / value);
    }

    const results = [];

    // Step 2: Process each query using DFS
    for (const [startNode, endNode] of queries) {
        // If either the startNode or endNode is not in our graph,
        // it means it was never part of any equation.
        // In this case, we cannot determine the value, so it's -1.0.
        if (!graph.has(startNode) || !graph.has(endNode)) {
            results.push(-1.0);
        }
        // If startNode and endNode are the same, the result is 1.0 (e.g., a/a = 1).
        // This is only valid if the node actually exists in the graph.
        // The previous `graph.has` check handles the case like ["x", "x"] where "x" isn't defined.
        else if (startNode === endNode) {
            results.push(1.0);
        }
        // Otherwise, perform a Depth-First Search to find the path and calculate the product.
        else {
            const visited = new Set(); // Keep track of visited nodes to prevent cycles
            const result = dfs(startNode, endNode, 1.0, visited, graph);
            results.push(result);
        }
    }

    return results;
};

/**
 * Depth-First Search function to find the product of division factors between two nodes.
 * @param {string} currentNode The node currently being visited.
 * @param {string} targetNode The node we are trying to reach.
 * @param {number} currentProduct The accumulated product of factors along the path so far.
 * @param {Set<string>} visited A set of nodes already visited in the current DFS path.
 * @param {Map<string, Map<string, number>>} graph The adjacency list representation of the graph.
 * @returns {number} The calculated product if a path is found, otherwise -1.0.
 */
function dfs(currentNode, targetNode, currentProduct, visited, graph) {
    // If we've already visited this node in the current path,
    // it means we've encountered a cycle or are revisiting a path that
    // didn't lead to the target. In this case, we stop this path.
    if (visited.has(currentNode)) {
        return -1.0;
    }

    // Mark the current node as visited for this path search.
    visited.add(currentNode);

    // If the current node is the target node, we've found a path!
    // Return the accumulated product.
    if (currentNode === targetNode) {
        return currentProduct;
    }

    // Explore neighbors of the current node.
    const neighbors = graph.get(currentNode);
    if (neighbors) { // Check if currentNode actually has neighbors (should always be true if in graph)
        for (const [neighbor, weight] of neighbors.entries()) {
            // Recursively call DFS for each neighbor.
            // Multiply the current product by the weight of the edge to the neighbor.
            const result = dfs(neighbor, targetNode, currentProduct * weight, visited, graph);

            // If the recursive call returned a valid result (not -1.0),
            // it means a path was found down that branch, so propagate it back.
            if (result !== -1.0) {
                return result;
            }
        }
    }

    // Backtrack: If no path was found from this `currentNode` to `targetNode`
    // through any of its neighbors, unmark it as visited. This allows other
    // potential paths from *other* starting points (in different queries, or
    // even different branches of the same query) to potentially use this node.
    visited.delete(currentNode);

    // If no path was found from this `currentNode` to the `targetNode`
    // through any of its branches, return -1.0.
    return -1.0;
}
