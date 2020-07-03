function solution(expression) {

    const reg = new RegExp('[*+-]', 'g');
    const operation = new RegExp('[^*+-]', 'g');
    let ans = 0;
    const sum = [];

    const d = expression.split(reg);
    const operations = expression.split(operation).filter(v => v !== '');

    for(let i = 0; sum.length < d.length + operations.length; i++) {
        sum.push(d[i]);
        if (operations[i])
            sum.push(operations[i]);
    }

    const operationPriority = [[0,1,2], [0,2,1], [1,2,0], [1,0,2], [2,0,1],[2,1,0]];

    operationPriority.forEach(operations => {
        let operand = sum.slice();
        let stack = [];

        operations.forEach(operation => {
            for (let i = 0; i < operand.length; i++) {
                if (operand[i] === '-' || operand[i] === '+' || operand[i] === '*') {
                    if (operation === 0 && operand[i] === '+') {
                        const first = Number(stack.pop());
                        const second = Number(operand[i+1]);
                        stack.push(first + second);
                        i++;
                    } else if (operation === 1&& operand[i] === '-') {
                        const first = Number(stack.pop());
                        const second = Number(operand[i+1]);
                        stack.push(first - second);
                        i++;
                    } else if (operation === 2&& operand[i] === '*') {
                        const first = Number(stack.pop());
                        const second = Number(operand[i+1]);
                        stack.push(first * second);
                        i++;
                    } else {
                        stack.push(operand[i]);
                    }
                } else {
                    stack.push(operand[i]);
                }
            }
            operand = [...stack];
            stack = [];
        });

        ans = Math.max(ans, Math.abs(operand[0]));
    });

    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/67257
 */