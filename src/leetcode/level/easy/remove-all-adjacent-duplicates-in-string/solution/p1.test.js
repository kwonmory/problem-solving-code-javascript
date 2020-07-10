import removeDuplicates from "./p1";

test.each([
    ['abbaca', 'ca']
])('Remove All Adjacent Duplicates in string', (n, ans) => {
    expect(removeDuplicates(n)).toBe(ans);
});