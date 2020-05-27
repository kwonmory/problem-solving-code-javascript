import {solution} from './p1';
import {expect} from "@jest/globals";

test.each([
    [[1,1,3,3,0,1,1], [1,3,0,1]],
    [[4,4,4,3,3], [4,3]]
])('같은 숫자는 싫어', (arr, ans) => {
    expect(solution(arr)).toStrictEqual(ans);
});