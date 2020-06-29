import solution from "./p1";

test.each([
    ['3people unFollowed me', '3people Unfollowed Me'],
    ['for the last week', 'For The Last Week']
])('문자열 만들기', (input, output) => {
    expect(solution(input)).toBe(output);
});