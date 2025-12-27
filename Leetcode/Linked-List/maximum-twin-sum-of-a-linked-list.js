
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    // Step 1: Find the middle of the linked list using slow and fast pointers.
    // Since n is always even, 'slow' will point to the first node of the second half.
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // After the loop, 'slow' is the head of the second half.
    // Example: For [5,4,2,1], slow will point to 2.

    // Step 2: Reverse the second half of the linked list.
    let prev = null;
    let current = slow; // Start reversal from the middle
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    // 'prev' is now the head of the reversed second half.
    // Example: For [5,4,2,1], the reversed second half is 1 -> 2. So 'prev' points to 1.

    // Step 3: Calculate twin sums by iterating through the first half
    // and the reversed second half simultaneously, keeping track of the maximum sum.
    let maxSum = 0;
    let p1 = head; // Pointer to the head of the first half
    let p2 = prev; // Pointer to the head of the reversed second half
    
    // Iterate until the end of the reversed second half (which is n/2 nodes).
    while (p2 !== null) {
        maxSum = Math.max(maxSum, p1.val + p2.val);
        p1 = p1.next;
        p2 = p2.next;
    }

    return maxSum;
};
