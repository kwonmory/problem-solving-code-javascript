const s = require('./my01');

test.each([
    [[6,10,2], "6210"],
    [[3,30,34,5,9], "9534330"]
])('가장 큰 수', (numbers, result) => {
    expect(s(numbers)).toBe(result);
})