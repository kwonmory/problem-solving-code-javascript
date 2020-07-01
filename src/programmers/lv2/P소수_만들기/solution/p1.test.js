import solution from "./p1";

test.each([
    [[1,2,3,4], 1],
    [[1,2,7,6,4], 4]
])('소수 만들기', (nums, ans) => {
    expect(solution(nums)).toBe(ans);
});