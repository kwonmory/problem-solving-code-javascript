import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    [2, 10, [7,4,5,6], 8],
    [100,100,[10], 101],
    [100,100,[10,10,10,10,10,10,10,10,10,10], 110]
])('다리를 지나는 트럭', (bridge, weight, truck, ans) => {
    expect(solution(bridge,weight,truck)).toBe(ans);
});