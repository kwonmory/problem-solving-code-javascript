function solution(n, lost, reserve) {
    let answer = n;
    answer -= lost.length;

    let deleteTarget = [];
    lost.forEach((v ,i) => {
        reserve.forEach((e, j) => {
            if (e == v) {
                deleteTarget.push(e);
                lost[i] = null;
                reserve[j] = null;
            }
        });
    });

    answer += deleteTarget.length;

    for (let i = 0; i < lost.length; i++) {
        let target = lost[i];
        if (target === null) continue;

        for (let j = 0; j < reserve.length; j++) {
            if (reserve[j] === null) continue;
            if (target + 1 === reserve[j] || target - 1 === reserve[j]) {
                // 빌려줄 수 있는 친구가 있는지 체크하기
                answer++;
                reserve.splice(j, 1);
                break;
            }
        }
    }
    return answer;
}

console.log(solution(5, [2,4], [1,3,5]));
console.log(solution(5, [2,4], [3]));
console.log(solution(3,[3], [1]));
console.log(solution(5,[2,5], [1,3,5]));
console.log(solution(6,[2, 4, 5], [1,3,5]));
console.log(solution(5,[1,2], [2,3])); // 히든 케이스!
