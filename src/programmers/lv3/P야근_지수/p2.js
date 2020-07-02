function solution(n, works) {

    // 제일 큰 친구기준으로 그 전에 있는 값으로 다 맞춰주기
    // 인덱스를 줘야겠네

    works.sort((a, b) => b - a); // 맨 왼쪽이 큰 수로

    for (let i = 1; i < works.length; i++) {
        const diff = works[i - 1] - works[i];
        for (let j = i - 1; j >= 0; j--) {
            if (n >= diff) {
                works[j] -= diff;
                n -= diff;
            } else {
                works[j] -= n;
                n = 0;
                break;
            }
        }
        if (n === 0) break;
    }

    if (n > 0) {
        let pos = 0;
        while (n !== 0) {
            works[pos]--;
            n--;
            pos++;
            if (pos >= works.length) {
                pos = 0;
            }
        }
    }

    return works.reduce((acc, v) => {
        if (v > 0) {
            acc += v ** 2
        }
        return acc;
    }, 0);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12927

   효율서을 통과 못하는 코드

 */