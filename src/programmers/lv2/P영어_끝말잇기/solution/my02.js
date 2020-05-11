function solution(n, words) {
    const wordsStore = new Set();

    // 가장 먼저 탈락한 사람의 번호 1번부터 시작
    // 자신이 몇 번째 차례에 탈락하는지
    // 탈락자가 없으면 0, 0 을 반환

    const newWords = words;

    let secondTemp = '';

    for (let i = 0; i < newWords.length; i++) {
        if (secondTemp === '') {
            secondTemp = newWords[i].charAt(newWords[i].length-1); // k
            wordsStore.add(newWords[i]);
            continue;
        }

        if (wordsStore.has(newWords[i])) return [(i % n) + 1, Math.floor(i/n) + 1];

        wordsStore.add(newWords[i]);

        if (secondTemp === newWords[i].charAt(0)) secondTemp = newWords[i].charAt(newWords[i].length-1);
        else return [(i % n) + 1, Math.floor(i/n) + 1];
    }

    if (wordsStore.size === newWords.length) {
        return [0, 0];
    }

    return [0,0];
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript


 */
