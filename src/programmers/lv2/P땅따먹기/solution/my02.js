function solution(land) {
    let dp = Array.from(Array(land.length), () => new Array(4).fill(0));

    dp[land.length-1][0] = land[land.length-1][0];
    dp[land.length-1][1] = land[land.length-1][1];
    dp[land.length-1][2] = land[land.length-1][2];
    dp[land.length-1][3] = land[land.length-1][3];

    for (let i = land.length - 2; i >= 0; i--) {
        dp[i][0] = land[i][0] + Math.max(dp[i+1][1], dp[i+1][2], dp[i+1][3]);
        dp[i][1] = land[i][1] + Math.max(dp[i+1][0], dp[i+1][2], dp[i+1][3]);
        dp[i][2] = land[i][2] + Math.max(dp[i+1][1], dp[i+1][0], dp[i+1][3]);
        dp[i][3] = land[i][3] + Math.max(dp[i+1][1], dp[i+1][2], dp[i+1][0]);
    }
    console.log(dp);

    return Math.max(dp[0][0],dp[0][1],dp[0][2],dp[0][3]);
}

module.exports = solution;


/*
    dp 로 풀어야 맞는 문제....
    아래 부터 위로 올라가면서 더하는 방식을 택한다.
    아래 부터 올라가게 된다면, 이미 계산된 값을 가지고 합하면서 올라가기 때문에 중복을 제거할 수 있다.
 */