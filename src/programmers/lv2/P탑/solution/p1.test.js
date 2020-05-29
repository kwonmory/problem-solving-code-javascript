import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [[6, 9, 5, 7, 4], [0, 0, 2, 2, 4]],
    [[3, 9, 9, 3, 5, 7, 2], [0, 0, 0, 3, 3, 3, 6]],
    [[1, 5, 3, 6, 7, 6, 5], [0, 0, 2, 0, 0, 5, 6]]
])('탑', (height, ans) => {
    expect(solution(height)).toStrictEqual(ans);
});