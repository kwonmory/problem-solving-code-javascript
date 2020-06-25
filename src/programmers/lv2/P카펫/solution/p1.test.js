import solution from "./p1";

describe('카펫', () => {
    test.each([
        [10, 2, [4, 3]],
        [8, 1, [3, 3]],
        [24, 24, [8, 6]],
    ])('카펫 테스트', (brown, yellow, ans) => {
        expect(solution(brown, yellow)).toEqual(ans);
    })
});