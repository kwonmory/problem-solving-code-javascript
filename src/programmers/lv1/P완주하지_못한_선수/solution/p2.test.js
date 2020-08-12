import solution from './p2';

test.each([
  [['leo', 'kiki', 'eden'], ['eden', 'kiki'], 'leo'],
  [['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'], 'vinko'],
  [['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'], 'mislav']
])('완주하지 못한 선수 테스트', (part, comp, result) => {
  expect(solution(part, comp)).toBe(result);
});