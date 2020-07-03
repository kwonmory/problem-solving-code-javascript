function solution(expression) {
    let ans = 0;
    const numbers = expression.split(/[-+*]/g);
    const operations = [];
    expression.split('').forEach(v => {
        if ( ['+','-', '*'].findIndex(e => e === v) >= 0) {
            operations.push(v);
        }
    });

    console.log({numbers, operations});

    ['+-*', '+*-', '-*+', '-+*', '-+*', '*-+', '*+-'].forEach(v => {
        ans = Math.max(ans, Math.abs(calc(v)));
    });

    return ans;

    function calc(operation) {
        operation.split('').forEach(v => {
            // 탐색을 한다
            // 걸리면 그 인덱스 부분과 인덱스의 다음부분을 계산한다.

        })
    }

}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/67257
 */