import solution from "./p1";

test.each([
    [4,5],
    [3,3]
])('멀리 뛰기', (n, ans) => {
    expect(solution(n)).toBe(ans);
});