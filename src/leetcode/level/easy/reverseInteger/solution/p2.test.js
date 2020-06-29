import reverse from "./p2";

test.each([
    [123, 321],
    [-123, -321],
    [120, 21]
])('reverse integer each test', (x, ans) => {
    expect(reverse(x)).toBe(ans);
});