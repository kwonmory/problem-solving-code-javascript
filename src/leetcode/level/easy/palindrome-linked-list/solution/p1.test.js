import isPalindrome from "./p1";

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

describe('palindrome linked list', () => {
    context('with palindrome list', () => {
        it('returns true', () => {
            const n1 = new ListNode(1);
            const n2 = new ListNode(2, n1);
            const n3 = new ListNode(2, n2);
            const head = new ListNode(1, n3);

            expect(isPalindrome(head)).toBe(true);
        });
    });

    context('with nope palindrome list', () => {
        it('returns false', () => {
            const n = new ListNode(2);
            const head = new ListNode(1, n);

            expect(isPalindrome(head)).toBe(false);
        });
    });
});
