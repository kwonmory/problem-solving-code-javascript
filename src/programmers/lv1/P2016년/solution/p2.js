function solution(a, b) {
    const DAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const DAYS = [0, 31, 29, 31, 30,31, 30, 31, 31, 30, 31, 30, 31];

    let count = b + 4;
    for (let i = 0; i < a; i++) {
        count += DAYS[i];
    }

    return DAY[count % 7];
}

export {solution}

/*
    https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

 */