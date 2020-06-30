function solution(n) {
    let ans = 0;

    while (n !== 0) {

        if (n === 1) break;

        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
            ans++;
        }
    }

    return ans + 1;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12980
 */