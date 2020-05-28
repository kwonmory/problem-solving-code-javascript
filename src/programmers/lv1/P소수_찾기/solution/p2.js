function solution(n) {
    let number = n+1;
    const ans = new Array(number).fill(0);
    const check = new Array(number).fill(false);

    if (n === 1)
        return 0;

    for (let i = 2; i <= number; i++) {
        if (!check[i]) {
            check[i] = true;
            ans[i] = i;
            for (let j = i*2; j <= number; j += i) {
                check[j] = true;
            }
        }
    }

    return ans.filter((v, index) => index <= n).filter(v => v !== 0).length;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
 */