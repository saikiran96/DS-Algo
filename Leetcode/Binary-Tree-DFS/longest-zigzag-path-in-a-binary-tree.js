
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxLength = 0;

    /**
     * Performs a depth-first search to find zigzag paths.
     * @param {TreeNode} node The current node being visited.
     * @returns {number[]} An array `[leftMax, rightMax]` where:
     *   - `leftMax` is the longest zigzag path starting at `node` by first taking a left turn
     *     (i.e., `node -> node.left`), and then alternating directions (e.g., `node -> node.left -> node.left.right -> ...`).
     *   - `rightMax` is the longest zigzag path starting at `node` by first taking a right turn
     *     (i.e., `node -> node.right`), and then alternating directions (e.g., `node -> node.right -> node.right.left -> ...`).
     * If a child node is null, its corresponding path length (e.g., `node.left.right`) is considered -1 for calculation purposes.
     * This allows `1 + (-1)` to correctly result in `0` for a path that ends abruptly (e.g., a path like `node -> node.left` has length 1,
     * so if `node.left.right` is null, the zigzag continues with length 0 from there, making the total length 1).
     */
    function dfs(node) {
        if (!node) {
            return [-1, -1]; // Base case: A null node cannot form a path, return -1.
        }

        // Recursively get zigzag path lengths from left and right children
        let leftChildPaths = dfs(node.left);
        let rightChildPaths = dfs(node.right);

        // Calculate the longest zigzag path starting from 'node' by first going left.
        // This path consists of:
        // 1. The edge `node -> node.left` (which contributes 1 to the length).
        // 2. The longest zigzag path starting from `node.left` by first going right.
        //    This value is `leftChildPaths[1]`.
        let currentLeftZigzag = 1 + leftChildPaths[1];

        // Calculate the longest zigzag path starting from 'node' by first going right.
        // This path consists of:
        // 1. The edge `node -> node.right` (which contributes 1 to the length).
        // 2. The longest zigzag path starting from `node.right` by first going left.
        //    This value is `rightChildPaths[0]`.
        let currentRightZigzag = 1 + rightChildPaths[0];

        // Update the global maximum length found so far.
        // A zigzag path can potentially start at any node in the tree.
        // Therefore, `currentLeftZigzag` and `currentRightZigzag` (which represent paths
        // starting from the current `node` and extending downwards) are potential candidates
        // for the overall longest path.
        maxLength = Math.max(maxLength, currentLeftZigzag, currentRightZigzag);

        // Return the calculated zigzag lengths for this node for its parent to use.
        // `currentLeftZigzag` is the max path starting with a left turn from `node`.
        // `currentRightZigzag` is the max path starting with a right turn from `node`.
        return [currentLeftZigzag, currentRightZigzag];
    }

    // Start the DFS from the root of the tree.
    dfs(root);

    // After the DFS completes, maxLength will hold the overall longest zigzag path.
    return maxLength;
};
