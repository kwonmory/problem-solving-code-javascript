function solution(arr1, arr2) {
    const result = Array.from(Array(arr1.length), () => Array(arr1[0].length).fill(0));

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return result;
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12950
 */