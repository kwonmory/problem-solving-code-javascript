function solution(s) {
    const map = new Map();
    const ansArr = [];

    s.replace(/[{}]/g, '').split(',').map(v => Number(v)).forEach(v => {
        if (map.has(v)) map.set(v, map.get(v) + 1);
        else map.set(v, 1);
    });

    for (const [key, value] of map.entries()) {
        ansArr.push([key, value]);
    }

    return ansArr.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
 */