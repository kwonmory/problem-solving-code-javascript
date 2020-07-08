import shuffle from "./p1";

test.each([
    [[2, 5, 1, 3, 4, 7], 3, [2, 3, 5, 4, 1, 7]],
    [[1, 2, 3, 4, 4, 3, 2, 1], 4, [1, 4, 2, 3, 3, 2, 4, 1]],
    [[1, 1, 2, 2], 2, [1, 2, 1, 2]]
])('Shuffle the Array', (nums, n, ans) => {
    expect(shuffle(nums, n)).toEqual(ans);
});