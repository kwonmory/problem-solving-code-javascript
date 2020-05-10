function solution(arrangement) {
    let answer = 0;
    // ( 가 오면 스택에 올리고
    // ) 가 오면 스택에 있는 양을 비교한다.
    // () 연속으로 오면 아에 자르는 방식
    // ) 다음에 ) 가 온 경우에는 + 1

    const data = arrangement.split("");

    const stack = [];
    const logStack = [];

    data.map((v,i) => {
        logStack.push(v);
        if (v === '(') {
            stack.push('(');
        } else {
            if (logStack[logStack.length-2] === ')') {
                // 만약 전의 값이 ) 이라고 하면 + 1
                stack.pop();
                answer += 1;
            } else {
                stack.pop();
                answer += stack.length;
            }
        }
    });

    return answer;
}

console.log(solution("()(((()())(())()))(())"));