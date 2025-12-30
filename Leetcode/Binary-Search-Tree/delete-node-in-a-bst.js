
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }

    // Traverse to find the node to be deleted
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else { // key === root.val, this is the node to delete
        // Case 1: Node has no children (leaf node)
        if (!root.left && !root.right) {
            return null;
        }

        // Case 2: Node has only one child
        if (!root.left) { // Only has right child
            return root.right;
        }
        if (!root.right) { // Only has left child
            return root.left;
        }

        // Case 3: Node has two children
        // Find the in-order successor (smallest node in the right subtree)
        let successor = root.right;
        while (successor.left !== null) {
            successor = successor.left;
        }

        // Replace the current node's value with the successor's value
        root.val = successor.val;

        // Recursively delete the successor from the right subtree
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
};
