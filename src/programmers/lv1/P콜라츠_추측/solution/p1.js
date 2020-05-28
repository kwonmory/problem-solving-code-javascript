function solution(num) {

    let count = 0;
    while (true) {
        if (num === 1) return count;

        count++;

        if (num % 2 === 0) num = Math.floor(num / 2);
        else num = (num * 3) + 1;

        if (count > 500) return -1;
    }

    throw '데이터가 애초에 맞지 않아요~';
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

    입력값 1을 고려해주자.
 */