import solution from "./p1";

test.each([
    [[1,1,1,1,1], 3, 5]
])('타겟 넘버', (numbers, target, ans) => {
    expect(solution(numbers, target)).toBe(ans);
});