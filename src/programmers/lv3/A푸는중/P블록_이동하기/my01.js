function solution(board) {
    let ans = 0;

    const check = new Set();
    const q = [];

    push({R1: 0, R2: 0, C1: 0, C2: 1});

    bfs();

    return ans;

    function bfs() {
        const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const rotation = [-1, 1];
        while (q.length !== 0) {
            const qSize = q.length;

            for (let i = 0; i < qSize; i++) {
                // 들어있는 값 하나씩 처리하기

                const robot = q.shift();

                if ((robot.R1 === board.length-1 && robot.R2 === board.length-1)
                    || robot.C1 === board.length-1 && robot.C2 === board.length-1) {
                    return;
                }
                // 상화좌우

                for (let i = 0; i < direction.length; i++) {
                    let r1 = robot.R1 + direction[i][0];
                    let r2 = robot.R2 + direction[i][1];
                    let c1 = robot.C1 + direction[i][0];
                    let c2 = robot.C2 + direction[i][1];

                    if (r1 >= 0 && r2 >= 0 && c1 >= 0 && c2 >= 0 && r1 < board.length
                        && r2 < board.length && c1 < board.length && c2 < board.length
                        && board[r1][r2] === 0 && board[c1][c2] === 0) {
                        push({R1: r1, R2: r2, C1: c1, C2: c2});
                    }
                }

                // 가로
                if (robot.r1 === robot.c1) {
                    rotation.forEach(e => {
                        let r1 = robot.R1 + e;
                        let r2 = robot.R2;
                        let c1 = robot.C1 + e;
                        let c2 = robot.C2;

                        if (r1 >= 0 && r2 >= 0 && c1 >= 0 && c2 >= 0
                            && r1 < board.length && r2 < board.length && c1 < board.length && c2 < board.length
                            && board[r1][r2] === 0 && board[c1][c2] === 0
                        ) {
                            push({R1: robot.R1, R2: robot.R2, C1: r1, C2: r2});
                            push({R1: robot.C1, R2: robot.C2, C1: c1, C2: c2});
                        }
                    });
                }

                // 세로
                if (robot.r2 === robot.c2) {
                    rotation.forEach(e => {
                        let r1 = robot.R1;
                        let r2 = robot.R2 + e;
                        let c1 = robot.C1;
                        let c2 = robot.C2 + e;

                        if (r1 >= 0 && r2 >= 0 && c1 >= 0 && c2 >= 0
                            && r1 < board.length && r2 < board.length && c1 < board.length && c2 < board.length
                            && board[r1][r2] === 0 && board[c1][c2] === 0
                        ) {
                            push({R1: robot.R1, R2: robot.R2, C1: r1, C2: r2});
                            push({R1: robot.C1, R2: robot.C2, C1: c1, C2: c2});
                        }
                    });
                }
            }
            ans++;
        }
    }

    // 0, 0 으로 시작

    function push({R1, R2, C1, C2}) {
        const makeHashCode = 31 * R1 * 1000 + 31 * R2 * 100 + 31 * 10 * C1 + 31 * C2+31;
        if (check.has(makeHashCode)) {
            return false;
        }
        check.add(makeHashCode);
        q.push({
            R1: R1,
            R2: R2,
            C1: C1,
            C2: C2
        });
        return true;
    }
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/60063

    [답을 본 후 문제를 풀고 있음]
    -- > 기본 테스트는 통과하는데 몇몇 테스트에서 실패함

    객체를 하나 만들어야겠어
    객체를..
    객체는 좌표를 2가지 가지고 있지
    지도는 map 으로 설정하고 이차원 배열을 쓰는게 편하겠어
    이동할 땐 -- 일땐 오른쪽 기준으로
    | 일땐 위쪽이 기준이되어 움직이는 것이 최대한 좋은 방향임

    총 3가지 그냥 가는거 A타입변형, B타입변형

    상하좌우
    세로, 가로

 */