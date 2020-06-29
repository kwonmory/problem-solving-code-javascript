import solution from "./p1";

test.each([
    [[3, 0, 6, 1, 5], 3],
])('H-Index', (citations, ans) => {
    expect(solution(citations)).toBe(ans);
});