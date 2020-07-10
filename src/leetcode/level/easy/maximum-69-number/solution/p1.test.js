import maximum69Number from "./p1";

test.each([
    [9669, 9969],
    [9996, 9999],
    [9999, 9999]
])('Maximum 69 Number', (n, ans) => {
    expect(maximum69Number(n)).toBe(ans);
});