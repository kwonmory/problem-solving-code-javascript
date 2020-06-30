import solution from "./p1";

test.each([
    [78, 83],
    [15, 23]
])('다음 큰 숫자', (n, ans) => {
    expect(solution(n)).toBe(ans);
});