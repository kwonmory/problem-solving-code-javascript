function solution(priorities, location) {
    const priorityQ = [...priorities].sort((a, b) => -(a - b));

    let ans = 0;

    priorities = priorities.map((v,i) => ({value: v, index: i}));

    while(priorities.length !== 0) {
        const target = priorities.shift();
        if (target.value === priorityQ[0]) {
            ans++;
            priorityQ.shift();
            if (target.index === location) {
                return ans;
            }
        } else {
            priorities.push(target);
        }
    }

    throw '이 곳에 들어오면 오류입니다.';
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 */