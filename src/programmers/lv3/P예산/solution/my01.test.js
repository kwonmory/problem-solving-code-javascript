const s = require('./my01');

test('예산', () => {
    expect(s([120, 110,140, 150], 485)).toBe(127);
})
