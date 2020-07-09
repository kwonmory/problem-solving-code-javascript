import threeSum from "./p1";

test.each([
    [[-1, 0, 1, 2, -1, -4], [
        [-1, 0, 1],
        [-1, -1, 2]
    ]]
])('3Sum', (nums, ans) => {
    expect(threeSum(nums)).toEqual(expect.arrayContaining(ans));
});