import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [1,'1'],
    [2,'2'],
    [3,'4'],
    [4,'11'],
    [5,'12'],
    [6,'14'],
    [7,'21'],
    [8,'22'],
    [9,'24'],
    [10,'41'],
    [11,'42'],
    [12,'44'],
    [13,'111']
])('%d : 124 나라의 숫자 테스트', (n, ans) => {
    expect(solution(n)).toBe(ans);
});