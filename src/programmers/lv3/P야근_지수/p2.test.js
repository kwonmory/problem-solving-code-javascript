import solution from "./p2";

test.each([
    [[4,3,3], 4, 12],
    [[2,1,2], 1, 6],
    [[1,1], 3, 0]
])('야근 지수', (works, n, ans) => {
    expect(solution(n, works)).toBe(ans);
});