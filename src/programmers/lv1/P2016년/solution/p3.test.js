import solution from './p3';
import {expect} from "@jest/globals";

test.each([
    [5,24, "TUE"],
    [1,2, "SAT"],
    [1,1, "FRI"]
])('2016년 테스트', (a, b, result) => {
    expect(solution(a,b)).toBe(result);
})