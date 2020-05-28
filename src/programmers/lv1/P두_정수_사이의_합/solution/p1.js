function solution(a, b) {
    let ans = 0;

    if (a === b) return a;

    if (a > b) {
        let temp = b;
        b = a;
        a = temp;
    }

    for (let i = a; i <= b; i++)
        ans += i;

    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
 */