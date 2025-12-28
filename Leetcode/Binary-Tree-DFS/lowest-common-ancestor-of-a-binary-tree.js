
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let leftLCA = lowestCommonAncestor(root.left, p, q);
    let rightLCA = lowestCommonAncestor(root.right, p, q);

    if (leftLCA !== null && rightLCA !== null) {
        return root;
    } else if (leftLCA !== null) {
        return leftLCA;
    } else {
        return rightLCA;
    }
};
