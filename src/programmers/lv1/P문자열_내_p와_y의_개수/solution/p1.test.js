import {solution} from './p1';
import {expect} from "@jest/globals";

test.each([
    ['pPoooyY', true],
    ['Pyy', false]
])('문자열 내 p와 y의 개수', (s, result) => {
    expect(solution(s)).toBe(result);
});