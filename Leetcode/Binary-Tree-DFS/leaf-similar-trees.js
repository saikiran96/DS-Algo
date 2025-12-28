
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    /**
     * Helper function to collect the values of leaves in a tree in order.
     * @param {TreeNode} root
     * @returns {number[]} An array of leaf values.
     */
    function getLeafValues(root) {
        const leafValues = [];

        function dfs(node) {
            if (!node) {
                return;
            }

            // If it's a leaf node (no left or right children)
            if (!node.left && !node.right) {
                leafValues.push(node.val);
                return;
            }

            // Recursively traverse left and right subtrees
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return leafValues;
    }

    const leaves1 = getLeafValues(root1);
    const leaves2 = getLeafValues(root2);

    // Compare the two arrays of leaf values
    if (leaves1.length !== leaves2.length) {
        return false;
    }

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }

    return true;
};
