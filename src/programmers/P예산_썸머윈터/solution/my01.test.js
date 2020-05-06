const s = require('./my01');

test.each([
    [[1,3,2,5,4], 9, 3],
    [[2,2,3,3], 10, 4]
])('예산 테스트', (d, budget, result) => {
    expect(s(d,budget)).toBe(result);
})