function solution(s) {
    const sSplitArr = s.toLowerCase().split('');

    sSplitArr[0] = sSplitArr[0].toUpperCase();

    for (let i = 1; i < sSplitArr.length; i++) {
        if (sSplitArr[i-1] === ' ' && sSplitArr[i] !== ' ')
            sSplitArr[i] = sSplitArr[i].toUpperCase();
    }

    return sSplitArr.join('');
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
 */