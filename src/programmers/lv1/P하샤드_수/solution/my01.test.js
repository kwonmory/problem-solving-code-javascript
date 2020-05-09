const s = require('./my01');

test.each([
    [10, true],
    [12, true],
    [11, false],
    [13, false]
])('하샤드 수 테스트', (arr, result) => {
    expect(s(arr)).toBe(result);
});