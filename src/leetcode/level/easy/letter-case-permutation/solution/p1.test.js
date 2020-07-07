import letterCasePermutation from "./p1";

test.each([
    ['a1b2', ["a1b2", "a1B2", "A1b2", "A1B2"]],
    ['3z4', ["3z4", "3Z4"]],
    ['12345', ["12345"]],
    ['C', ['c','C']],
])('letter case permutation', (s, ans) => {
    expect(letterCasePermutation(s)).toEqual(ans);
});