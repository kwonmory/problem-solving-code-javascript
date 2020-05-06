const s = require('./my01');

test.each([
    [5, 12, 4],
    [2, 11, 3]
])('N으로 표현 테스트 - %i ', (n, number, result) => {
    expect(s(n,number)).toBe(result);
});