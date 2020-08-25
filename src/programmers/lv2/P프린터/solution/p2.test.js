import solution from "./p2";
import {expect} from "@jest/globals";

test.each([
    [[2,1,3,2], 2, 1],
    [[1,1,9,1,1,1], 0, 5]
])('프린터', (priorities, location, ans) => {
    expect(solution(priorities, location)).toBe(ans);
});