import findDuplicate from "./p1";

test.each([
    [[1, 3, 4, 2, 2], 2],
    [[3, 1, 3, 4, 2], 3]
])('Find the Duplicate Number', (n, ans) => {
    expect(findDuplicate(n)).toBe(ans);
});