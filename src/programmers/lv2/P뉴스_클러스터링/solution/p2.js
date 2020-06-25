function solution(str1, str2) {
    let intersection = 0;
    let union = 0;

    const stringFragments = {
        setA: makeSet(str1),
        setB: makeSet(str2)
    };

    const set = new Set([...stringFragments.setA, ...stringFragments.setB]);

    set.forEach(v => {
        const has1 = stringFragments.setA.filter(i => i === v).length;
        const has2 = stringFragments.setB.filter(i => i === v).length;

        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    });

    return Math.floor(((intersection === 0 && union === 0) ? 1 :  (intersection / union)) * 65536);
}

function makeSet(string) {
    const ans = [];

    for (let i = 0; i < string.length - 1; i++) {

        let partString = (string.substr(i, 2)).toLowerCase();

        if (isProperString(partString)) {
            ans.push(partString);
        }
    }

    return ans;
}

function isProperString(string) {

    const matchString = string.match(/[a-z]/g);

    return matchString ? matchString.length === 2 : false;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/17677

    J(A,B) => 교집합 크기 / 합집합 크기
    둘다 공집합 => 1

 */