import combinationSum from './p1';

test.each([
        [[2, 3, 6, 7], 7, [
            [7],
            [2, 2, 3]
        ]
        ],
        [[2, 3, 5], 8, [
            [2, 2, 2, 2],
            [2, 3, 3],
            [3, 5]
        ]]
    ]
)('Combination Sum', (candidates, target, ans) => {
    // expect(combinationSum(candidates, target)).toEq(ans);
    expect(combinationSum(candidates, target)).toEqual(expect.arrayContaining(ans));
});