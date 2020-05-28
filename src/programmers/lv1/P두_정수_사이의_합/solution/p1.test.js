import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [3,5,12],
    [3,3,3],
    [5,3,12]
])('두 정수 사이의 합 테스트', (a,b,result) => {
    expect(solution(a,b)).toBe(result);
});