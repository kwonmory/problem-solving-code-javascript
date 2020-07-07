import plusOne from "./p1";

test.each([
    [[1, 2, 3], [1, 2, 4]],
    [[4, 3, 2, 1], [4, 3, 2, 2]]
])('plus one', (n, ans) => {
    expect(plusOne(n)).toEqual(ans);
});
