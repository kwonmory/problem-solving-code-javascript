import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [[4,3,2,1], [4,3,2]],
    [[10], [-1]],
    [[4,1,3,2], [4,3,2]]
])('제일 작은 수 제거하기', (arr, ans) => {
    expect(solution(arr)).toStrictEqual(ans);
})