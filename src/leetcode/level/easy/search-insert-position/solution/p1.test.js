import searchInsert from "./p1";

test.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0]
])('search insert position', (n, n2, ans) => {
    expect(searchInsert(n, n2)).toBe(ans);
});