import permute from "./p1";

test.each([
    [[1, 2, 3], [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ]]
])('Permutations', (n, ans) => {
    expect(permute(n)).toEqual(ans);
});