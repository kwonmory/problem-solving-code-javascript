import solution from './p1';

test.each([
    [
        [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
        [1,5,3,5,1,2,1,4],
        4
    ]
])('크레인 인형뽑기 게임', (board, moves, ans) => {
    expect(solution(board, moves)).toBe(ans);
})