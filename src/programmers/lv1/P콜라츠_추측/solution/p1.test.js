import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [6, 8],
    [16, 4],
    [626331, -1]
])('콜라츠 추측', (n, ans) => {
    expect(solution(n)).toBe(ans);
});