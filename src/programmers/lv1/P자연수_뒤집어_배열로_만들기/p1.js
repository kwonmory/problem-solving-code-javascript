function solution(n) {
    return n.toString()
        .split('')
        .map(v => Number(v))
        .sort((a,b) => b - a);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

    n 이 백억이 넘어가네!
    그래서 위로 해결하기 힘듬
    p2 로 넘어가자.
 */