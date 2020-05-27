import {solution} from './p2';
import {expect} from "@jest/globals";

test.each([
    [5,24, "TUE"]
])('2016년 테스트', (a, b, result) => {
    expect(solution(a,b)).toBe(result);
})