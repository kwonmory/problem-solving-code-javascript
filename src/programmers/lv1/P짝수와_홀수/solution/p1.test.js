import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [3, "Odd"],
    [4, "Even"]
])('짝수와 홀수', (num, ans) => {
    expect(solution(num)).toBe(ans);
});