import solution from "./p2";
import {expect} from "@jest/globals";

test.each([
    [[93, 30, 55], [1, 30, 5], [2, 1]],
    [[40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7], [1, 2, 3]],
    [[93, 30, 55, 60, 40, 65], [1, 30, 5 , 10, 60, 7], [2,4]]
])('기능개발', (progresses, speeds, ans) => {
    expect(solution(progresses, speeds)).toStrictEqual(ans);
});