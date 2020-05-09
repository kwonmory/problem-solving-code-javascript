const s = require('./my01');

test.each([
    [[[1, 2], [2, 3]], [[3, 4], [5, 6]], [[4, 6], [7, 9]]],
    [[[1], [2]], [[3], [4]], [[4], [6]]]
])('행렬의 덧셈 테스트', (arr1, arr2, result) => {
    expect(s(arr1, arr2)).toStrictEqual(result);
});