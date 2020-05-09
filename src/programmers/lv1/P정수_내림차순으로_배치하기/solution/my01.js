function solution(n) {
    return Number(String(n).split('').sort((a,b) => -(parseInt(a) - parseInt(b))).join(''));
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12933
 */