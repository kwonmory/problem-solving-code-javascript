const s = require('./my01');

test('자물쇠와 열쇠 테스트', () => {
    expect(s([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]	)).toBeTruthy();
});