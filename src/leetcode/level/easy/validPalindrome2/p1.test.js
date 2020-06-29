import validPalindrome from "./p1";

test.each([
    ['aba', true],
    ['abca', true]
])('valid palindrome 2', (input, output) => {
    expect(validPalindrome(input)).toBe(output);
});