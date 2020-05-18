const s = require('./my01');

test.each([
    [5, 26],
    [6, 42]
])('타일 장식물', (n, result) => {
    expect(s(n)).toBe(result);
});