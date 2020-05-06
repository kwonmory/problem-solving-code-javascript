function solution(s) {
    const result = [];

    for (let sliceSize = 1; sliceSize < s.length / 2 + 1; sliceSize++) {
        result.push(압축된문자열함수(s, sliceSize));
    }

    return result.reduce((acc, curr) => {
        return curr.length < acc ? curr.length : acc;
    }, 1000);
}

function 압축된문자열함수(str, n) {

    let target = ''; // 비교대상 변수
    let processedStr = ''; // 만들어지는 문자열
    let count = 1; // 반복되는 횟수

    for (let pos = 0; pos <= str.length;) {
        // 비교대상 변수 길이는 n 과 같아야하며, 그리고 다 채워졌다면, 다음 비교 들어간다.
        // 비교 했는데
        // 동일하면 카운트 기록하고, 문자열을 만든다.
        // 동일하지 않으면 비교대상 변수를 비워주고 pos 를 -1 해준다.

        if (target === '') {
            target = str.substr(pos, n); // target 에 올리기
            pos += n;
            continue;
        }

        if (target === str.substr(pos, n)) {
            count++;
            pos += n; // 요 부분이 문제였음!
        } else {
            // 기존에 있던거 해결 해 줘야 겠지
            if (count !== 1) {
                processedStr += count;
            }
            processedStr += target;
            target = '';
            count = 1;
        }
    }

    if (target !== '') processedStr += target;

    return processedStr;
}

/*
    문자열을 자를땐 1개부터 문자열 길이 전체의 반까지만 게싼해보면 되는거지
*/

module.exports = solution;