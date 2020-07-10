import removeDuplicates from "./p1";

test.each([
    ['abcd', 2, 'abcd'],
    ['deeedbbcccbdaa', 3, 'aa'],
    ['pbbcggttciiippooaais', 2, 'ps'],
])('Remove All Adjacent Duplicates in String 2', (s, k, ans) => {
    expect(removeDuplicates(s, k)).toBe(ans);
});
