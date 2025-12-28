
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
var goodNodes = function(root) {
    let goodNodeCount = 0;

    function dfs(node, maxValPath) {
        if (!node) {
            return;
        }

        // If the current node's value is greater than or equal to the maximum value
        // encountered so far on the path from the root to this node,
        // then this node is a "good node".
        if (node.val >= maxValPath) {
            goodNodeCount++;
            // Update the maximum value for the path to its children
            maxValPath = node.val;
        }
        // If node.val < maxValPath, it's not a good node,
        // and maxValPath for its children remains the existing maxValPath.

        // Recursively call for left and right children
        dfs(node.left, maxValPath);
        dfs(node.right, maxValPath);
    }

    // Start DFS from the root.
    // Initialize maxValPath to -Infinity because node values can be negative
    // and we want the root itself to always be considered a good node.
    // The problem constraints state node.val is between -10^4 and 10^4.
    dfs(root, -Infinity);

    return goodNodeCount;
};
