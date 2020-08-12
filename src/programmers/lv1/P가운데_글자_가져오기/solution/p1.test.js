import p1 from './p1';

test.each([
  ['abcde', 'c'],
  ['qwer', 'we']
])('가운데 글자 가져오기 테스트', (s, result) => {
  expect(p1(s)).toBe(result);
})