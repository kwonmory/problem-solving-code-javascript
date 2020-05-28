import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [2,5,[2,4,6,8,10]],
    [4,3,[4,8,12]],
    [-4,2,[-4,-8]]
])('x만큼 간격이 있는 n개의 숫자', (x,n,ans) => {
    expect(solution(x,n)).toStrictEqual(ans);
});