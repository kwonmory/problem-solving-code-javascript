const s = require('./my02');

test('땅따먹기 테스트', () => {
    expect(s([[1,2,3,5],[5,6,7,8],[4,3,2,1]])).toBe(16);
});