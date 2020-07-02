function solution(n, edge) {
    const q = [];
    const dist = [...Array(n+1)].map(_ => 0);
    const list = [...Array(n+1)].map(_ => []);

    for (let i = 0; i < edge.length; i++) {
        list[edge[i][0]].push(edge[i][1]);
        list[edge[i][1]].push(edge[i][0]);
    }

    q.push(1);
    dist[1] = 1;

    while (q.length > 0) {
        const target = q.shift();

        for (let i of list[target]) {
            if (dist[i] === 0) {
                dist[i] = dist[target] + 1;
                q.push(i);
            }
        }
    }

    const max = Math.max(...dist);

    return dist.filter(v => v === max).length;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript

 */