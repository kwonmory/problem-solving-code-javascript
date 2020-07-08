import threeSumClosest from "./p1";

test.each([
    [[-1, 2, 1, -4], 1, 2],
    [[0,1,2], 3, 3]
])('3sum closest', (nums, target, ans) => {
    expect(threeSumClosest(nums, target)).toBe(ans);
});