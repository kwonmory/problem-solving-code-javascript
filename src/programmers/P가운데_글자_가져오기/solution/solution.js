function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1,
        s.length % 2 === 0 ? 2 : 1);
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12903
 */