/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    console.log(arr);

    return arr.join('') === arr.reverse().join('');
};

export default isPalindrome;

/*

    https://leetcode.com/problems/palindrome-linked-list/

[다른 분 코드]

대부분이 나와 동일하게 풀었던데, 아래는 다르게 풀어서 넣어봄

var isPalindrome = function(head) {
    if(!head)return head;
    let fast = head;
    let slow = head;
    while(fast.next !== null && fast.next.next !==null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let rev = reverse(slow);
    while(head != null && rev != null){

        if(head.val !== rev.val){
            return false;
        }
        head = head.next;
        rev = rev.next;
    }
    return true
};

var reverse = function(head){
        var current = head;
        var prev;
        var next;
        while(current!==null){
            next = current.next;
            current.next = prev;
            prev = current
            current = next;
        }
        head = prev;

        return head
    }
 */