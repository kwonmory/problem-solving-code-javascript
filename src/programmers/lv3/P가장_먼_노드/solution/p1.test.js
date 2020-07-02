import solution from "./p1";

test.each([
    [6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]] ,3]
])('가장 먼 노드', (n, vertex, ans) => {
    expect(solution(n, vertex)).toBe(ans);
});