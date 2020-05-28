function solution(n) {
    const ans = [];

    while (n !== 0) {
        const remain = n % 10;
        n = Math.floor(n / 10);
        ans.push(remain);
    }

    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

 */