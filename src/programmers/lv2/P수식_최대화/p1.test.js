import solution from "./p1";

test.each([
    ["100-200*300-500+20", 60420],
    ["50*6-3*2", 300]
])('수식 최대화', (expression, ans) => {
    expect(solution(expression)).toBe(ans);
});