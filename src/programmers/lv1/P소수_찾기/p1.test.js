import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [10, 4],
    [5, 3]
])('소수 찾기 테스트', (n, result) => {
    expect(solution(n)).toBe(result);
});