import reverseVowels from './p1';

test.each([
    ['hello', 'holle'],
    ['leetcode', 'leotcede'],
    [' ', ' ']
])('reverseVowelsOfAString', (n, out) => {
    expect(reverseVowels(n)).toBe(out);
});