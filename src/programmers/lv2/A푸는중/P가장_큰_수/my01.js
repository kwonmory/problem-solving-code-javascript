function solution(numbers) {
    const str = [];
    numbers.forEach(v => str.push(String(v)));

    str.sort((a,b) => {

    }).reverse();



    return str.reduce((acc, v) => acc += v, '');
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

    문자열로 다 바꾸고, 정렬을 한다.
    정렬 한 뒤 뒤에서 부터 붙인다.

    정렬을 한 다음에 그냥 붙이는 식으로 진행해야할 듯

    일단 첫번재 문자가 큰거 위주로 하고
    같다고 나오면 다음 문자를 비교하는데
    다음 문자가 짧은거가 승리
    그리고 둘다 짧지 않으면 큰게 승리


 */