const s = require('./my01');

test.each([
    [[1,2,3,4], 2.5],
    [[5,5], 5]
])('평균 구하기 테스트', (arr, result) => {
    expect(s(arr)).toBe(result);
});