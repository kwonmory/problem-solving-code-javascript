function solution(answers) {

    const ans = [];

    const s1 = [1,2,3,4,5];
    const s2 = [2,1,2,3,2,4,2,5];
    const s3 = [3,3,1,1,2,2,4,4,5,5];

    const s = [0, 0, 0];

    answers.forEach((v, index) => {
        if (s1[index % s1.length] === v) {
            s[0]++;
        }
        if (s2[index % s2.length] === v) {
            s[1]++;
        }
        if (s3[index % s3.length] === v) {
            s[2]++;
        }
    });

    const maxScore = Math.max(...s);

    s.forEach((v, index) => {
        if (v === maxScore) ans.push(index + 1);
    });

    return ans;
}

export {solution}


/*
    https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

    1번 : 1,2,3,4,5
    2번 : 2,1,2,3,2,4,2,5
    3번 : 3,3,1,1,2,2,4,4,5,5

    7분 컷
 */