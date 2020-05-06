function solution(m, n, board) {
    let answer = 0;
    let map = [];

    for (let i = 0; i < board.length; i++) {
        map[i] = [];
        for (let j = 0; j < board[i].length; j++) {
            map[i][j] = board[i].charAt(j);
        }
    }

    while (true) {
        if (!search4Block()) {
            break;
        }
        sortMap();
    }

    return answer;

    function search4Block() {
        let tmpMap = []; // 터져야할 부분들 임시 저장소
        let count = 0; // 변경되었는지 확인하는 카운터

        for (let i = 0; i < map.length; i++) {
            tmpMap[i] = JSON.parse(JSON.stringify(map[i]));
            // deepCopy 를 위함
        }

        for (let i = 0; i < map.length - 1; i++) {
            // 마지막 전까지만 보면 됌
            for (let j = 0; j < map[i].length - 1; j++) {
                // 마지막 전까지만 보면 됌
                // 왼쪽에서 오른쪽으로 바라보면
                // i, j+1
                // i+1, j
                // i+1, j+1
                // i, j
                let target = map[i][j]; // 타겟부터
                if (target === 0) continue;
                if (j + 1 < map[i].length && i + 1 < map.length) {
                    // 범위 체크
                    if (map[i][j + 1] === target
                        && map[i + 1][j] === target
                        && map[i + 1][j + 1] === target
                    ) {
                        tmpMap[i][j] = true;
                        tmpMap[i][j + 1] = true;
                        tmpMap[i + 1][j + 1] = true;
                        tmpMap[i + 1][j] = true;
                    } else {
                        continue;
                    }
                }
            }
        }

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (tmpMap[i][j] == true) {
                    map[i][j] = 0;
                    answer++;
                    count++;
                }
            }
        }
        // console.log(count);
        return count === 0 ? false : true;
    }

    function sortMap() {
        // 스택으로 해야하나..하고 스택으로 처리함
        let stack = [];
        let tmpMap = [];
        for (let i = 0; i < n; i++) {
            stack[i] = [];
        }

        for (let i = 0; i < m; i++) {
            tmpMap[i] = [];
        }

        // 일단 하나씩 해당하는거 넣기
        for (let i = map.length - 1; i >= 0; i--) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] !== 0) {
                    stack[j].push(map[i][j]);
                }
            }
        }

        for (let i = map.length - 1; i >= 0; i--) {
            for (let j = 0; j < map[i].length; j++) {
                let a = stack[j].shift();
                if (a !== undefined)
                    tmpMap[i][j] = a;
                else
                    tmpMap[i][j] = 0;
            }
        }
        map = tmpMap;
    }
}


// console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));

// bfs 방식으로 풀어야할꺼가타아.
// 마지막에서 -1 까지만 검사하면 될꺼 같고
// 왼쪽에서 오른쪽으로 순차적으로 가면서 검사하면 될 것 같아
//그리고 마지막 세로도 검사할 필요가 없어
// 검사하면서 만약에 만족하는게 있다면 체크를 해두고,
// 그리고 체크한 부분을 지워주고,
// 지워준 부분에 대해서 메꿔주는 함수가 필요할 것 같아
// 그리고 다시 처음부터 돌아가는데
// 문제는 비어있는 부분이 있기 때문에 이를 고려해서
// 4칸이 안비었는지 체크하는 부분이 필요할꺼같아.
// 이건 처음부터 넣어주면 되겠지
// 그리고 만약에 바뀐 변경된 부분이 없으면 수행을 마감하고 리턴하면 되지

// 일단 저장 방식을 배열로 하는게 제일 깔끔