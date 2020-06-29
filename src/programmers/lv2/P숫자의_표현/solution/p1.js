function solution(n) {
    let ans = 0;

    for (let i = 1; i <= n; i++) {
        if (searching(i)) ans++;
    }

    return ans;

    function searching(start) {
        let acc = 0;
        for (let i = start; acc <= n; i++) {
            acc += i;
            if (n === acc) return true;
        }
        return false;
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

    O(n^2) 인데 이게 통과가 된다고?
 */