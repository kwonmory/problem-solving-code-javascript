const s = require('./my01');

test.each([
    [3, 2],
    [5, 5]
])('피보나치 수', (n, result) => {
    expect(s(n)).toBe(result);
});