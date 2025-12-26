
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    // If the list has only one node, deleting it results in an empty list.
    // The problem constraints state 1 <= n <= 10^5, so head will never be null initially.
    if (head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null; // Pointer to keep track of the node just before 'slow'

    // Move fast pointer two steps and slow pointer one step.
    // When fast reaches the end, slow will be at the middle node,
    // and prev will be the node just before the middle node.
    while (fast !== null && fast.next !== null) {
        prev = slow; // 'prev' always lags one step behind 'slow'
        slow = slow.next; // 'slow' moves one step
        fast = fast.next.next; // 'fast' moves two steps
    }

    // At this point, 'slow' is the middle node to be deleted.
    // 'prev' is the node before 'slow'.
    // To delete 'slow', we bypass it by connecting 'prev.next' to 'slow.next'.
    // Since we've already handled the single-node case (n=1), 'prev' will always be non-null here.
    prev.next = slow.next;

    return head;
};
