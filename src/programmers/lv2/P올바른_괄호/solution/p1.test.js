import solution from "./p1";

test.each([
    ['()()', true],
    ['(())()', true],
    [')()(', false],
    ['(()(', false],
    ['((()(())))', true],
    ['))))()', false]
])('올바른 괄호', (s, ans) => {
    expect(solution(s)).toBe(ans);
});