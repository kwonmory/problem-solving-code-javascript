import scoreOfParentheses from "./p1";

test.each([
    ['()', 1],
    ['(())', 2],
    ['()()', 2],
    ['(()(()))', 6]
])('Score of Parentheses', (n, ans) => {
    expect(scoreOfParentheses(n)).toBe(ans);
});