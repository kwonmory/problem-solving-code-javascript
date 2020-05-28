import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [3, 12, [3, 12]],
    [2, 5, [1, 10]]
])('최대공약수, 최소공배수', (n, m, ans) => {
    expect(solution(n,m)).toStrictEqual(ans);
});
