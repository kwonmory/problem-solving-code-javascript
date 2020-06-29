function solution(s) {
    const stack = [];

    for (let target of s.split('')) {
        if (target === '(') {
            stack.push(0);
        } else {
            if (stack.length === 0) return false;
            else stack.pop();
        }
    }

    return stack.length === 0;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 */