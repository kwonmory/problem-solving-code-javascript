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


    return ans.reverse().join('');
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript

    이 문제 답이 이상함, 숫자로 출력하라고 하는거 같은데 문자로 출력하래..
 */