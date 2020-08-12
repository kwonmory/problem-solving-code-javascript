import solution from './p1';

test.each([
  [5, [2, 4], [1, 3, 5], 5],
  [5, [2, 4], [3], 4],
  [3, [3], [1], 2]
])('체육복', (n, lost, reserve, ans) => {
  expect(solution(n, lost, reserve)).toBe(ans);
});