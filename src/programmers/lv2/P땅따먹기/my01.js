function solution(land) {
    let ans = 0;

    let newland = [];

    for (let i = 0; i < land.length; i++) {
        const firstMax = Math.max.apply(undefined, land[i]);
        const firstIndex = land[i].findIndex(v => v === firstMax);
        const copyLand = [...land[i]];
        copyLand.splice(firstIndex, 1);
        const secondMax = Math.max.apply(null, copyLand);
        const secondIndex = land[i].findIndex(v => v === secondMax);

        newland.push([{firstMax, firstIndex}, {secondMax, secondIndex}]);
    }

    let disableIndex = -1;
    for (let i = 0; i < newland.length; i++) {
        if (disableIndex === -1) {
            ans += newland[i][0].firstMax;
            disableIndex = newland[i][0].firstIndex;
            continue;
        }

        if (disableIndex === newland[i][0].firstIndex) {
            // 같다면 2번째꺼
            ans += newland[i][1].secondMax;
            disableIndex = newland[i][1].secondIndex;
        } else {
            ans += newland[i][0].firstMax;
            disableIndex = newland[i][0].firstIndex;
        }
    }

    return ans;
}

module.exports = solution;


/*

    첫번째에서 제일 큰거 선택
    그 다음 제일큰 거 인덱스를제외하고
    제일 큰거 선택  ---------------> 반복

    실패했네~
    그럼
    제일 큰거랑 그 다음 큰거만 저장하면 되잖아
    그럼 인덱스는 어떻게 찾아 ㅇㅅㅇ..
    객체로 같이 저장해놔?


    이렇게는 아에 풀지 못하나보다.
    질문하기를 보니 DP 로 풀고있으니 나도 DP로 풀어보자.

 */