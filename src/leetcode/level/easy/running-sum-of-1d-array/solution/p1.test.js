import runningSum from "./p1";

test.each([
    [[1, 2, 3, 4], [1, 3, 6, 10]],
    [[1, 1, 1, 1, 1], [1, 2, 3, 4, 5]],
    [[3, 1, 2, 10, 1], [3, 4, 6, 16, 17]]
])('runningSum', (n, ans) => {
    expect(runningSum(n)).toEqual(ans);
});