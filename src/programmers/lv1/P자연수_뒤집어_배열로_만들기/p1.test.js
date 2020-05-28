import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [12345, [5,4,3,2,1]],
])('자연수 뒤집어 배열로 만들기', (n, ans) => {
    expect(solution(n)).toStrictEqual(ans);
});