const s = require('./my01');

test('스킬트리 테스트', () => {
    expect(s("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})