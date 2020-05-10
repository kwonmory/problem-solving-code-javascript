const solution = require('./my01');

test.each([
    ['a234', false],
    ['1234', true]
])('문자열 다루기 기본', (s, result) => {
    expect(solution(s)).toBe(result);
})