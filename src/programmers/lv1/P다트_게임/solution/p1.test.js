import solution from "./p1";
import {expect} from "@jest/globals";

test.each([
    ['1S2D*3T', 37],
    ['1D2S#10S',9],
    ['1D2S0T', 3],
    ['1S*2T*3S', 23],
    ['1D#2S*3S', 5],
    ['1T2D3D#', -4],
    ['1D2S3T*', 59]
])('다트 게임', (n, ans) => {
    expect(solution(n)).toBe(ans);
})