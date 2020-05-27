import {solution} from './p1';
import {expect} from "@jest/globals";

test.each([
    [[1,2,3,4,5], [1]],
    [[1,3,2,4,2], [1,2,3]]
])('모의고사 테스트', (ans, result) => {
    expect(solution(ans)).toStrictEqual(result);
});