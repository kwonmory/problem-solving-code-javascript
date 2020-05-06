/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    let count = 0;
    let tmpHead = head;
    while(tmpHead.next !== null) {
        count++;
        tmpHead = tmpHead.next;
    }

    let tempHead = head;
    for (let i = 0; i < Math.ceil(count/2); i++) {
        tempHead = tempHead.next;
    }

    return tempHead;
};