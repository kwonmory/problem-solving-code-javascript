import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    ['01033334444', '*******4444'],
    ['027778888', '*****8888']
])('핸드폰 번호 가리기', (phone, ans) => {
    expect(solution(phone)).toBe(ans);
});