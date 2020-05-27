function solution(arr, divisor) {
    const ans = arr.filter(v => v % divisor === 0).sort((a,b) => a-b)
    return (ans.length > 0) ? ans : [-1];
}

export {solution};

/*
    https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
 */