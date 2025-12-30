
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
var maxLevelSum = function(root) {
    // According to constraints, the number of nodes is in the range [1, 10^4],
    // so root will always be a valid TreeNode and not null.
    // If root could be null, we'd need to decide what to return (e.g., 0 or 1).

    let maxSum = -Infinity; // Initialize with a very small number to ensure any level sum is greater
    let maxLevel = 1;       // The level number corresponding to maxSum
    let currentLevel = 1;   // Track the current level we are processing

    let queue = [root];     // Initialize queue for BFS with the root node

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        let currentLevelSum = 0;      // Sum for the nodes at the current level

        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Dequeue the front node
            currentLevelSum += node.val; // Add its value to the current level's sum

            // Enqueue children for the next level
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        // Compare current level's sum with the maximum sum found so far
        if (currentLevelSum > maxSum) {
            maxSum = currentLevelSum; // Update maximum sum
            maxLevel = currentLevel;  // Update the level number
        }

        currentLevel++; // Move to the next level
    }

    return maxLevel; // Return the level with the maximum sum
};
