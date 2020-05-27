function solution(participant, completion) {
    let ans = '';
    const map = new Map();

    completion.forEach(v => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });

    participant.forEach(v => {
        if (!map.has(v)) {
            ans = v;
        } else {
            // 동명이인 체크
            if (map.get(v) === 0) {
                ans = v;
            }
            map.set(v, map.get(v) - 1);
        }
    });


    return ans;
}

export {solution};

/*
    https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

    맵에 넣어서 가져오기만 하면 됟릇

    7분 30초 컷
 */