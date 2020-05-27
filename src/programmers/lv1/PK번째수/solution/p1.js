function solution(array, commands) {
    const ans = [];

    commands.forEach(v => {
        ans.push(array.slice(v[0]-1, v[1]).sort((a,b)=> a-b)[v[2]-1]);
    });

    return ans;
}

export {solution};

/*
    https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

    7분 30초컷
    정렬 빼먹고 있었음
 */