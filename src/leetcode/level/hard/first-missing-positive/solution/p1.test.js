import firstMissingPositive from "./p1";

test.each([
    [[1,2,0], 3],
    [[3,4,-1,1], 2],
    [[7,8,9,11,12], 1]
])('First Missing Positive', (n, ans) => {
   expect(firstMissingPositive(n)).toBe(ans);
});