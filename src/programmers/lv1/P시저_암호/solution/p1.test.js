import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    ["AB", 1, "BC"],
    ["z", 1, "a"],
    ["a B z", 4, "e F d"]
])('시저 암호 테스트', (s,n, result) => {
    expect(solution(s, n)).toBe(result);
})