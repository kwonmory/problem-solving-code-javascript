import reverse from "./p1";

test.each([
    [123, 321],
    [-123, -321],
    [120, 21]
])('reverse integer each test', (x, ans) => {
    expect(reverse(x)).toBe(ans);
});