function solution(s)
{
    const stack = [];
    const sArr = s.split('');

    sArr.forEach(v => {
        stack.push(v);

        if (stack.length >= 2) {
            if (stack[stack.length-1] === stack[stack.length-2]) {
                stack.pop();
                stack.pop();
            }
        }
    })

    return stack.length !== 0 ? 0 : 1;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12973
 */