import containsDuplicate from './p1';

test.each([
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true]
])('containsDuplicate', (n, ans) => {
    expect(containsDuplicate(n)).toBe(ans);
});