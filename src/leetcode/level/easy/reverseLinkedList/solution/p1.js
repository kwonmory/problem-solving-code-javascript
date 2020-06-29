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
const reverseList = function (head) {

    let current = head;
    let next = null;
    let prev = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;

    return head;
};

export default reverseList;