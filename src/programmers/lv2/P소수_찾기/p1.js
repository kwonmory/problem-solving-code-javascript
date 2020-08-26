let set = new Set();
function solution(numbers) {

    makeNumber(numbers, '', new Array(numbers.length).fill(false));

    console.log(set);
}


// 어떤 숫자인지, 인덱스 뭔지
// 그리고 앞뒤가 바뀔 수 있다는 점, index 를 처음부터 실행하는데, 체크한거 포지션 기억해야겠네
function makeNumber(numbers, madeNumber, check) {

    if (madeNumber.length === numbers.length) {
        return;
    }

    if (madeNumber.length >= 1) {
        set.add(Number(madeNumber));
    }

    for (let i = 0; i < numbers.length; i++) {
        if (check) continue;

        check[i] = true;
        makeNumber(numbers, madeNumber + numbers.charAt(i), check) // 포함
        check[i] = false;
        makeNumber(numbers, madeNumber, check) // 미포함
    }

}

function isPrime(number) {

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

    소수를 만들고 소수인지 판단하기

    일단 먼저 소수 만들 수 있는거 다 만들어보고, 하나씩 소수인지 체크를 하는 방법

    그런데 7자까지라고 했으니깐, 만들 수 있는 개수가 7! 정돈데, 여기에 소수 판별까지하면

    시간 초과가 걱정되긴 하지만, 일단 해보고 만약에 초과되면 에라테네스의 체를 써보자.
 */