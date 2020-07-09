import findDuplicates from "./p1";

test.each([
    [[4, 3, 2, 7, 8, 2, 3, 1], [2, 3]]
])('Find All Duplicates in an Array', (n, ans) => {
    expect(findDuplicates(n)).toEqual(ans);
});