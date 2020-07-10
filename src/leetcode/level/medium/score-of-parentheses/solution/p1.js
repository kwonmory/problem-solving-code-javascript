/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function(S) {
    const stack = [0];
    for (let v of S) {
        if (v === '(') {
            stack.push(0);
        } else {
            let last = stack.pop();
            stack[stack.length - 1] = (stack[stack.length - 1] +  2 * last) || 1;
        }
    }

    // (()(()))
    // 0 0 5
    // 0 0 일 때 1
    // 0 0 0
    return stack.pop();
};

export default scoreOfParentheses;

/*
    https://leetcode.com/problems/score-of-parentheses/

    ( 가 온다. 그럼 스택에 저장
    ( 가 온다. 그럼 스택을 확인한다.
    스택에 있으면 +1 점
    그리고 다른 스택에 1점을 저장한다.
    stack[stack.length - 1] += 2 * last || 1
    stack[stack.length - 1] = (stack[stack.length - 1] + 2 * last) || 1

    어렵다.. ㅠ
 */