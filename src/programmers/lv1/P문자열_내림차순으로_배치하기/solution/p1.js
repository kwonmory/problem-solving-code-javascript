function solution(s) {

    const lowerChar = [];
    const upperChar = [];

    s.split('').forEach(v => {
        if (v >= 'A' && v <= 'Z') {
            upperChar.push(v);
        } else {
            lowerChar.push(v);
        }
    });
    lowerChar.sort((a,b) => b.localeCompare(a));
    upperChar.sort((a,b) => b.localeCompare(a));

    return [...lowerChar, ...upperChar].join('');
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
 */