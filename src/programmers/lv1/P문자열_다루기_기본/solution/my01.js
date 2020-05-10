function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    const convertStringToNumber = parseInt(s);

    if (String(convertStringToNumber).length !== s.length) return false;

    return !isNaN(convertStringToNumber);
}

module.exports = solution;

/*
https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
 */