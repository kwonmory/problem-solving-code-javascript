function solution(s) {
    let stack = [];

    // let sArr = [...s]; // 스프레드 연산자를 이용하면 시간초과가 뜸
    let sArr = s.split("");

    sArr.forEach(e => {
        stack.push(e);
        if (stack.length >= 2) {
            if (stack[stack.length - 1] === stack[stack.length - 2]) {
                stack.pop();
                stack.pop();
            }
        }
    });

    return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));