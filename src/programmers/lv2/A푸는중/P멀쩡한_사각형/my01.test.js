const s = require('./my01');

test('멀쩡한 사각형 테스트', () => {
    expect(s(8, 12)).toBe(80);
})