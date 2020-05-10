function solution(n, money) {
    const answer = 0;
    const MAX_NUMBER = 10;
    let ans = new Array(MAX_NUMBER).fill(0);

    // 이걸 생각해볼 수 있곘네.
    // 이미 money에 있는건 카운트가 1이 되어있 는 상태

    money.forEach(v => {
        ans[v] = 1;
    });

    // i 가 n 이라고 보면 되고
    for (let i = 2; i < MAX_NUMBER; i++) {
        let count = ans[i-1];
        for (let k = 0; k < money.length; k++) {
            // 만약 현재에다가 다음 값을 추가할 수 있으면 sum에 더해주기
            // i == money[k] 넘어가야지
            if (i === i-1 + money[k]) continue;

            if ((i-1) + money[k] === i) {
                count++;
            }
            if (money[k] === i) {
                count++;
            }

        }
        count %= 1000000007;
        ans[i] += count;
    }

    console.log(ans);
    return ans[n];
}

console.log(solution(5, [1, 2, 5]));
