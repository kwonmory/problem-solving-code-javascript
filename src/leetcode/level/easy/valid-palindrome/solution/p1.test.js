import isPalindrome from "./p1";

test.each([
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
])('valid palindrome', (input, output) => {
    expect(isPalindrome(input)).toBe(output);
});