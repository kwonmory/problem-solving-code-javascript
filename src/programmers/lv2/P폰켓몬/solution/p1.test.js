import solution from "./p1";

test.each([
    [[3,1,2,3], 2],
    [[3,3,3,2,2,4], 3],
    [[3,3,3,2,2,2], 2]
])('폰켓몬', (nums, ans) => {
    expect(solution(nums)).toBe(ans);
});