function solution(n) {

    if (n === 1) return (n+1) ** 2;

    for (let i = 1; i < n / 2; i++) {
        if (i*i === n) {
            return (i+1) ** 2;
        }
    }

    return -1;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

    n 이 50,000,000,000,000 을 고려해야함

    역시 n 이 1일 때 걸리는 테스트 케이스가 있네
 */