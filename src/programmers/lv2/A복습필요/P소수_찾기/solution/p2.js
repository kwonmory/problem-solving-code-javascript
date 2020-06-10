function primeArrFunc(MAX_NUMBER) {
    const prime = Array(MAX_NUMBER).fill(-1);
    const isNotPrimeCheck = Array(MAX_NUMBER).fill(false);

    for (let i = 2; i < MAX_NUMBER; i++) {
        if (!isNotPrimeCheck[i]) {
            isNotPrimeCheck[i] = true;
            prime[i] = i;

            for (let j = i * i; j < MAX_NUMBER; j = j + i) {
                isNotPrimeCheck[j] = true;
            }
        }
    }

    return prime;
}

function solution(numbers) {
    const MAX_NUMBER = Number([...numbers].map(v => Number(v)).sort((a,b) => b - a).join(''))
    const primeArr = primeArrFunc(MAX_NUMBER+1);

    function findPrimeNumber(numberList, preNumber = '') {
        return numberList.reduce((primeNumbers, number, index) => {
            primeArr[Number(preNumber + number)] !== -1 && primeNumbers.push(Number(preNumber + number));

            const nextNumberList = [...numberList];

            nextNumberList.splice(index, 1);

            primeNumbers.push(...findPrimeNumber(nextNumberList, preNumber + number));

            return primeNumbers;
        }, []);
    }
    return [...new Set(findPrimeNumber(numbers.split('')))].length;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

    1. 숫자를 만든다.
    2. 소수인지 확인한다.

    어떻게 '17' 에서 '71' 이 되게할까..

    자바로 풀땐, 먼저 자리 수에 따른 문자를 만들고 순열 돌려서 체크했었는데,
    음.. 다른 방법이 없을까..
    17 이라는 게 있다고 하면 1을 먼저 선택 그리고 7일을 선택
    1을 선택 안함 -> 그리고 7일을 선택하고 체크 된 부분을 보고 1을 선택
 */