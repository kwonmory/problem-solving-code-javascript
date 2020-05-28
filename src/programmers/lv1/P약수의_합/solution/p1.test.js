import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [12, 28],
    [5, 6]
])('약수의 합', (n, result) => {
    expect(solution(n)).toBe(result);
});