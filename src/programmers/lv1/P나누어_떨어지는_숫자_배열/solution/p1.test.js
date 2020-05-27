import {solution} from './p1';
import {expect} from "@jest/globals";

test.each([
    [[5,9,7,10], 5, [5,10]],
    [[2,36,1,3], 1, [1,2,3,36]],
    [[3,2,6], 10, [-1]]
])('나누어 떨어지는 숫자 배열', (arr, divisor, result) => {
    expect(solution(arr, divisor)).toStrictEqual(result);
});