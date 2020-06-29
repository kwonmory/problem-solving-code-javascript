import reverseList from "./p1";

test('reverseList', () => {

    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
    const ans = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))))

    expect(reverseList(head)).toEqual(ans);
});