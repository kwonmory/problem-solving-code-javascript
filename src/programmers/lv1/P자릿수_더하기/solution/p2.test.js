import solution from "./p2";
import {expect} from "@jest/globals";

test.each([
    [123, 6],
    [987, 24]
])('자릿수 더하기 테스트', (n, ans) => {
    expect(solution(n)).toBe(ans);
});