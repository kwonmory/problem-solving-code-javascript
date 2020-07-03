function solution(n, a, b) {
    let players = [...Array(n)].map((_, index) => index+1);
    let temp = [];
    let round = 0;

    while (players.length !== 1) {
        const first = players.shift();
        const second = players.shift();

        if (first === second) {
            return round;
        }

        if ([a,b].includes(first) >= 0) {
            temp.push(first);
        } else if([a,b].includes(second) >= 0) {
            temp.push(second);
        } else {
            temp.push(first);
        }

        if (players.length === 0) {
            players = temp;
            temp = [];
            round++;
        }
    }

    return round;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12985
 */