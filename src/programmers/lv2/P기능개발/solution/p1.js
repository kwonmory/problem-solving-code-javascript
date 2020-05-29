function solution(progresses, speeds) {

    const ans = [];

    const newProgress = progresses.map((v, i) => {
        const remainJob = 100 - v;
        return Math.ceil(remainJob / speeds[i]);
    });

    while (newProgress.length !== 0) {
        const target = newProgress.shift();
        let count = 1;

        for (let i = 0; i < newProgress.length; i++) {
            if (target >= newProgress[i]) count++;
            else break;
        }

        for (let i = 1; i < count; i++) {
            newProgress.shift();
        }

        ans.push(count);
    }

    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

 */