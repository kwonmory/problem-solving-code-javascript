function solution(board, moves) {
    let answer = 0;

    let jar = []; // 저장통로

    moves.forEach(v => {
        // 인덱스를 잡고, 그 인덱스에 따라서 for 문 돌려서
        // 0 이 아닌 값이며 그걸 가지고 0 으로 바꿔주고,
        // jar 에 넣어서 비교하기
        let targetIndex = v - 1; // 두번째 인덱스

        for (let i = 0; i < board.length; i++) {
            if (board[i][targetIndex] !== 0) {
                // 0 이 아닌경우 0 으로 만들어주기

                if (jar.length !== 0
                    && jar[jar.length-1] === board[i][targetIndex]) {
                    board[i][targetIndex] = 0;
                    jar.pop();
                    answer += 2;
                    break;
                }

                jar.push(board[i][targetIndex]);
                board[i][targetIndex] = 0;
                break;
            }
        }
    });

    return answer;
}
