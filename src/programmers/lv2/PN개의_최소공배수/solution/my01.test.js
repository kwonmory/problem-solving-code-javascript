const s = require('./my01');

test.each([
    [[2,6,8,14], 168],
    [[1,2,3], 6]
])('최소공배수 테스트', (arr, result) => {
    expect(s(arr)).toBe(result);
});