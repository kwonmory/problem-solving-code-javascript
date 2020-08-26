import solution from './p1';

describe('문자열 압축하기', () => {

  test.each([
    ['aabbaccc', 7],
    ['ababcdcdababcdcd', 9],
    ['abcabcdede', 8],
    ['abcabcabcabcdededededede', 14],
    ['xababcdcdababcdcd', 17]
  ])('문자열 압축', (data, result) => {
    expect(solution(data)).toBe(result);
  })
});
