import {solution} from "./p1";
import {expect} from "@jest/globals";

test.each([
    [[1,5,2,6,3,7,4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]], [5, 6, 3]]
])('K번째수 테스트', (array, command, result) => {
    expect(solution(array, command)).toStrictEqual(result);
});