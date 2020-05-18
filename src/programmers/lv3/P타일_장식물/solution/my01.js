function solution(N) {
    const arr = [1,1];

    while (arr.length <= 80)
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return (arr[N] * 2 + arr[N-1] * 2)
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/43104
 */