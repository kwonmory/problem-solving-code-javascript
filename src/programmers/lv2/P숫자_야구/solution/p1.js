function solution(baseball) {
    const baseballNumbers = [];
    const POSSIBLE_START_NUMBER = 123;
    const POSSIBLE_END_NUMBER = 987;

    for (let number = POSSIBLE_START_NUMBER; number <= POSSIBLE_END_NUMBER; number++) {
        const numberArr = String(number).split('');
        let isBaseballNumber = true;

        if (numberArr.find(v => v === '0')) continue;

        if (new Set(numberArr).size !== 3) continue;

        for (let [targetNumber, targetStrike, targetBall] of baseball) {
            const targetNumberArr = String(targetNumber).split('');


            let strike = 0;
            let ball = 0;

            for (let i = 0; i < 3; i++) {
                const num = numberArr[i];

                for (let j = 0; j < 3; j++)
                    if (num === targetNumberArr[j])
                        if (i === j) strike++; else ball++;
            }

            if (strike !== targetStrike || ball !== targetBall) {
                isBaseballNumber = false;
            }
        }

        if (isBaseballNumber) {
            baseballNumbers.push(number);
        }
    }

    return baseballNumbers.length;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42841?language=javascript

    질문의 수가 100개까지
    자리수는 3자리수
    9 * 9 * 9 * 100 = 72900

    먼저, 가능한 숫자들을 하나씩 검색해보는 방법이 있겠지.

    동일한 숫자는 안나오니깐, 최소 123 부터 시작하고, 최대 987까지 숫자는 나오는 상황

    일단 그럼 number 하나를 가져왔다고 하고,

    비교를 하면 되겠네
 */