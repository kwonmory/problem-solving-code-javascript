const s = require('./my01');

test('입국심사', () => {
    expect(s(6, [7,10])).toBe(28);
});