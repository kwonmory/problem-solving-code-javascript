import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [121, 144],
    [3, -1]
])('정수 제곱근 판별', (n, ans) => {
    expect(solution(n)).toBe(ans);
})