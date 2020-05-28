function solution(dartResult) {
    const arr = [];

    let current = 0;

    for (let i = 0; i < dartResult.length; i++) {

        const ch = dartResult.charAt(i);

        if (ch === 'S') {
            current = current ** 1;
        } else if (ch === 'D') {
            current = current ** 2;
        } else if (ch === 'T') {
            current = current ** 3;
        } else if (ch === '*') {
            if (arr.length !== 0) {
                const target = arr.pop();
                arr.push(target * 2);
            }
            current *= 2;
        } else if (ch === '#') {
            current = -current;
        } else {
            // 숫자일 경우
            if (i !== 0) {
                arr.push(current);
                current = 0;
            }

            if ('0' <= dartResult.charAt(i + 1) && '9' >= dartResult.charAt(i + 1)) {
                current = 10;
                i++;
            } else {
                current = Number(ch);
            }

        }
    }
    if (current !== 0) arr.push(current);

    return arr.reduce((acc, v) => acc += v, 0);
}

export default solution;

/*

    https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

    스타상 -> 해당 점수와 전의 점수를 2배로
    중첩이됨
    아차상 -> 해당점수는 마이너스가 됌

 */