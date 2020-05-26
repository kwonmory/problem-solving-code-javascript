const solution = require('./my02');

test('테스트', () => {
    expect(solution([1,2,3,4])).toStrictEqual([24,12,8,6]);
});