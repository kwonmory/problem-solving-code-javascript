function solution(A, B) {
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);

    return A.reduce((acc, item, index) => acc + (item * B[index]), 0);
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

    이건 최솟값을 구하는거니깐
    사실 배열을 반대로 정렬해서 각각 곱하면 끝?

    1 2 4
    5 4 4
    5 8 16
 */