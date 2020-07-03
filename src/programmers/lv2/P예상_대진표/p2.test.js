import solution from "./p2";

test.each([
    [8, 4, 7, 3]
])('예상 대진표', (n, a, b, ans) => {
    expect(solution(n, a, b)).toBe(ans);
});