import solution from './p1';

test.each([
    [[1, 4, 2], [5, 4, 4], 29],
    [[1, 2], [3, 4], 10],
])('최솟값 만들기', (a, b, ans) => {
    expect(solution(a,b)).toBe(ans);
});