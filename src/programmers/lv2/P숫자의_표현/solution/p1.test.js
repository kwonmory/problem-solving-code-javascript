import solution from "./p1";

test.each([
    [15, 4]
])('숫자의 표현', (n, ans) => {
    expect(solution(n)).toBe(ans);
});