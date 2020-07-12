import numIdenticalPairs from "./p1";

test.each([
    [[1, 2, 3, 1, 1, 3], 4],
    [[1, 1, 1, 1], 6],
    [[1, 2, 3], 0]
])('Number of Good Pairs', (nums, ans) => {
    expect(numIdenticalPairs(nums)).toBe(ans);
});