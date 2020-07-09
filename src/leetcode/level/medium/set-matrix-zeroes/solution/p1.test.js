import setZeroes from "./p1";

test.each([
    [[
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ], [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
    ]],
    [[
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ], [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
    ]
    ],
])('Set Matrix Zeroes', (n, ans) => {
    expect(setZeroes(n)).toEqual(expect.arrayContaining(ans));
});
