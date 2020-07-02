function solution(n, works) {

    while (n > 0) {
        let max = Math.max(...works);

        if (max === 0) break;

        works.forEach((v,_) => {
            if (v === max && n > 0) {
                works[_]--;
                n--;
            }
        });

    }

    return works.reduce((acc, v) => acc + v ** 2, 0);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12927

 */