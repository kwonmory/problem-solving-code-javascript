import solution from "./p1";

test.each([
    [[70, 50, 80, 50], 100, 3],
    [[70, 80, 50], 100, 3],
    [[40,40,40], 100, 2],
])('구명보트', (people, limit, ans) => {
    expect(solution(people, limit)).toBe(ans);
});