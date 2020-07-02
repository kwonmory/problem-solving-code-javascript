function solution(n, works) {

    while (n !== 0) {
        works.sort((a, b) => a - b);

        const worksLastIndex = works.length - 1;

        if (works[worksLastIndex] === 0) {
            return 0;
        }

        const diff = works[worksLastIndex] - works[worksLastIndex - 1];

        if (diff > 1) {
            if (diff <= n) {
                works[worksLastIndex] = works[worksLastIndex] - diff;
                n = n - diff;
            } else {
                works[worksLastIndex] = works[worksLastIndex] - n;
                n = 0;
            }
        } else {
            works[worksLastIndex] = works[worksLastIndex] - 1;
            n--;
        }
    }

    let ans = 0;

    for (let i = 0; i < works.length; i++) {
        ans += works[i] * works[i];
    }
    // return works.reduce((acc, v) => {
    //     return acc += v ** 2;
    // }, 0);
    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12927

   효율서을 통과 못하는 코드

 */