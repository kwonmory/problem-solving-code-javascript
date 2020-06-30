import solution from "./p1";

test.each([
    [5, 2],
    [6, 2],
    [5000, 5]
])('점프와 순간 이동', (n, ans) => {
    expect(solution(n)).toBe(ans);
});