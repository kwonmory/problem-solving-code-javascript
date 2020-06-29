import isPalindrome from "./p1";

test.each([
    [121, true],
    [-121, false],
    [10, false]
])('palindromeNumber each testing', (x, ans) => {
    expect(isPalindrome(x)).toBe(ans);
});