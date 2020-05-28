import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [5, [2, 1, 2, 6, 2, 4, 3, 3], [3, 4, 2, 1, 5]],
    [4, [4, 4, 4, 4, 4], [4, 1, 2, 3]],
    [8, [1,2,3,4,5,6,7], [7,6,5,4,3,2,1,8]]
])('실패율', (n, stages, ans) => {
    expect(solution(n, stages)).toStrictEqual(ans);
});