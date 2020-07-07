import reverseVowels from './p2';

test.each([
    ['hello', 'holle'],
    ['leetcode', 'leotcede'],
    [' ', ' ']
])('reverseVowelsOfAString', (n, out) => {
    expect(reverseVowels(n)).toBe(out);
});