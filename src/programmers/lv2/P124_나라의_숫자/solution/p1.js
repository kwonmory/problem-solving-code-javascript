function solution(n) {
    const ans = [];

    while (n !== 0) {
        let remain = Math.floor(n % 3);
        n = Math.floor(n / 3);
        if (remain === 0) {
            remain = 4;
            n -= 1;
        }

        ans.push(remain);

    }


    return Number(ans.reverse().join(''));
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript

    나머지가 1,2, 3 일 때 각각 처리해줘야되는 상황으로 느껴짐
 */