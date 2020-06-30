function solution(n) {

    const queue = [];
    const visited = Array(n+1).fill(Number.MAX_SAFE_INTEGER);

    queue.push(1);
    visited[1] = 1;

    while (queue.length !== 0) {
        const target = queue.shift();

        if (target * 2 <= n && visited[target * 2] === Number.MAX_SAFE_INTEGER &&
            visited[target * 2] > visited[target]) {
            visited[target * 2] = visited[target];
            queue.unshift(target * 2);
        }

        if (target + 1 <= n && visited[target + 1] === Number.MAX_SAFE_INTEGER
            && visited[target + 1] > visited[target]) {
            visited[target + 1] = visited[target] + 1;
            queue.push(target + 1);
        }
    }

    return visited[n];
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12980

    1. K칸 이동
    2. 현재거리 * 2

    1. K칸 이동시 K 만큼 건전지 사용

    건전시 사용량의 최솟값

    리커전도 안되고

    BFS도 안되네!

 */