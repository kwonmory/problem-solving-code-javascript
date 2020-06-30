function solution(n) {
    const BINARY = 2;
    const MAX = 1000000;
    const nBitCount = n.toString(BINARY).split('').filter(v => v !== '0').length;

    for (let i = n + 1; i <= MAX; i++) {
        const nextBitCount = i.toString(BINARY).split('').filter(v => v !== '0').length;
        if (nBitCount === nextBitCount) return i;
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

    음..그냥 나눠서 자리수 채우면 되긴하는데..
    비트로 해결해보는 방법이 없을까..
    00000000000000001 = 1
    에서 공통적인 부분이면 +1 아니면 0을 해서 비교하면 어떨까
    그러면 32개 정도? 64개 정도만 비교하면 될테니깐
    64 * 1000000 1억 안으로 끝낼 수 있을 꺼같은데

 */