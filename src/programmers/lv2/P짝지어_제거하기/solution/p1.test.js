import solution from "./p1";

test.each([
    ['baabaa', 1],
    ['cdcd', 0]
])('짝지어 제거하기', (s, ans) => {
    expect(solution(s)).toBe(ans);
});