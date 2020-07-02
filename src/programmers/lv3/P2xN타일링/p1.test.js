import solution from "./p1";

test.each([
    [4, 5],
    [3, 3],
])('2xn 타일링', (n, ans) => {
    expect(solution(n)).toBe(ans);
});