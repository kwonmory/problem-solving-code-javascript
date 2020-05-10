const s = require('./my01');

test.each([
    [[4,3,3], 4, 12],
    [[2,1,2], 1, 6],
    [[1,1], 3, 0]
])('야근 지수 테스트', (works, n, result) => {
    expect(s(n, works)).toBe(result);
});
