function solution(n, computers) {
    let answer = 0;
    const check = new Array(n); // 방문 여부 체크

    for (let i = 0; i < n; i++) {
        if (check[i]) continue;

        answer++;
        bfs(computers, check, i);
    }

    return answer;
}

function bfs(computerArr, checkArr, targetIndex) {
    const q = [];
    q.push(targetIndex);
    checkArr[targetIndex] = true;

    while (q.length !== 0) {
        const target = q.shift();

        for (let i = 0; i < computerArr.length; i++) {
            if (!checkArr[i] && computerArr[target][i] === 1) {
                q.push(i);
                checkArr[i] = true;
            }
        }
    }
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
