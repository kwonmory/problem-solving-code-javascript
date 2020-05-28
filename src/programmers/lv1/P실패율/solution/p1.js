function solution(N, stages) {
    const stageStore = [];

    for (let stage = 1; stage <= N; stage++) {
        let allPlayersCount = 0;
        let failPlayersCount = 0;

        stages.forEach(v => {
            if (v >= stage) allPlayersCount++;
            if (v === stage) failPlayersCount++;
        });

        stageStore.push({stage, rate : allPlayersCount === 0 ? 0 : failPlayersCount / allPlayersCount});
    }

    stageStore.sort((a,b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage;
        }
        return b.rate - a.rate;
    })

    return stageStore.reduce((acc, v) => ([...acc, v.stage]), [])
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
    200000 * 500 = 1억

    0 / 1 과 1 / 0 은 주의해야할 듯 하다.

 */