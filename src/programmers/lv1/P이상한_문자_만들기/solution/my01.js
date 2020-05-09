function solution(s) {
    let completeStr = '';
    let pos = 0;
    for (let i = 0; i < s.length; i++) {
        let character = s.substr(i, 1);
        if (character === ' ') {
            completeStr += ' ';
            pos = 0;
        } else {
            completeStr += (pos % 2 === 0) ? character.toUpperCase() : character.toLowerCase();
            pos++;
        }
    }

    return completeStr;
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12930
 */