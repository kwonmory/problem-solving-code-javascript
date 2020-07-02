function solution(n, works) {

    works.sort((a,b) => b - a);

    while (n > 0) {
        let max = Math.max(...works);
        if (max <= 0) break;

        for (let i = 0; i < works.length; i++) {
            if (works[i] === max && n > 0) {
                works[i]--;
                n--;
            } else {
                break;
            }
        }
    }

    return works.reduce((acc, v) => acc + v ** 2, 0);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12927

 */