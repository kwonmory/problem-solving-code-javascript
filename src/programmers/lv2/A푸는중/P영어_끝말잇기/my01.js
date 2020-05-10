function solution(n, words) {
    const answer = [];

    const set = new Set();

    for (let i = 0; i < words.length; i++) {
        // 다음과 이어지지 않을 때랑 이미 존재하면

        if (i+1 < words.length && words[i].charAt(words.length-1) !== words[i+1].charAt(0)) {
            answer[0] = i % n;
            answer[1] = i;
            break;
        }

        if (set.has(words[i])) {
            // 존재한다는 의미
            // 그럼 탈락
            answer[0] = i % n;
            answer[1] = i;
            break;
        } else {
            // 만약에 다음 글자와 다르다면
            set.add(words[i]);
        }
    }

    return answer;
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript


 */
