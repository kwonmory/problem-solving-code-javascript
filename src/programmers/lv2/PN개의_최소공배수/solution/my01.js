function solution(arr) {
    let answer = arr.shift();
    while (arr.length > 0) {
        answer = lcm(answer, arr.shift());
    }
    return answer;
}


function gcd(a, b) {
    return (b === 0) ? a : gcd(b, Math.floor(a % b))
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12953

    두개를 최대공약수 구하고, 그리고 최소공배수 구하고
    LCM(LCM(LCM(2,6), 8), 14)

   GCD = a,b b , a % b 해서 재귀
   LCM = a * b / GCD

 */