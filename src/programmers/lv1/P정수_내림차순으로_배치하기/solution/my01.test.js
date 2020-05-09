const s = require('./my01');

test('정수 내림차순으로 배치하기', () => {
    expect(s(118372)).toBe(873211);
});
