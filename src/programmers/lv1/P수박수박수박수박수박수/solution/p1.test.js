import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [3, "수박수"],
    [4, "수박수박"]
])('수박 테스트', (n, result) => {
    expect(solution(n)).toBe(result);
});