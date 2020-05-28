function solution(n)
{
    let sum = 0; // 1억 자리수 곱하기 9 해도 초과하진 않겠군

    while (n !== 0) {
        const remain = n % 10;
        n = Math.floor(n /10);
        sum += remain;
    }

    return sum;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
 */