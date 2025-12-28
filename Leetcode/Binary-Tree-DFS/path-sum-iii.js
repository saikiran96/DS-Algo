
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return 0;
    }

    // Helper function to count paths that start from a given node
    // and sum up to currentTarget.
    const countPathsFromNode = (node, currentTarget) => {
        if (!node) {
            return 0;
        }

        let count = 0;
        // If the current node's value equals the remaining target,
        // we found one valid path ending at this node.
        if (node.val === currentTarget) {
            count++;
        }

        // Recursively explore paths in the left and right subtrees.
        // The new target for children is the current target minus the current node's value.
        count += countPathsFromNode(node.left, currentTarget - node.val);
        count += countPathsFromNode(node.right, currentTarget - node.val);

        return count;
    };

    // The total number of paths is the sum of:
    // 1. Paths starting at the current root node
    // 2. Paths entirely within the left subtree (which may or may not start at root.left)
    // 3. Paths entirely within the right subtree (which may or may not start at root.right)
    let totalPaths = countPathsFromNode(root, targetSum); // Paths starting exactly at `root`
    totalPaths += pathSum(root.left, targetSum);         // Paths starting in the left subtree
    totalPaths += pathSum(root.right, targetSum);        // Paths starting in the right subtree

    return totalPaths;
};
