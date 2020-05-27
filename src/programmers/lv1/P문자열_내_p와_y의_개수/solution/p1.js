function solution(s){
    const ans = Object.values(s.toLowerCase().split('').reduce((acc, v) => {
        if (v === 'y' || v === 'p') return {...acc, [v]: acc[v] + 1} else return acc;
    }, {y: 0, p: 0}));
    return ans[0] === ans[1];
}

export {solution};

/*
    https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 */