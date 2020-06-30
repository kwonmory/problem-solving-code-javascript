import solution from "./p2";

test.each([
    [5, 2],
    [6, 2],
    [5000, 5],
    [4, 1],
])('점프와 순간 이동', (n, ans) => {
    expect(solution(n)).toBe(ans);
});