import relativeSortArray from "./p1";

test.each([
    [[2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6], [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]]
])('Relative Sort Array', (arr1, arr2, ans) => {
    expect(relativeSortArray(arr1, arr2)).toEqual(ans);
});