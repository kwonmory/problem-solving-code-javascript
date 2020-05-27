function solution(a, b) {
    const DAY = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    return DAY[new Date(2016, a - 1, b).getUTCDay()-1]
}

export {solution}

/*
    https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

    3,4 는 실패함 -> 이유를 모름
 */