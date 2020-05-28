function solution(n)
{
    return n
        .toString()
        .split('')
        .reduce((acc, v) => acc += Number(v), 0);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
 */