
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    if (!root) {
        return result;
    }

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightmostNode = null; 

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); 
            rightmostNode = node; 

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        result.push(rightmostNode.val);
    }

    return result;
};
