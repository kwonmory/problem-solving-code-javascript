function solution(x, n) {
    return Array(n).fill(x).map((v,index) => v * (index+1));
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
 */