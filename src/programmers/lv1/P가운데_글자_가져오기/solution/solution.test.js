const solution = require('./solution');

test.each([
    ['abcde', 'c'],
    ['qwer', 'we']
])('가운데 글자 가져오기 테스트', (s, result) => {
    expect(solution(s)).toBe(result);
})