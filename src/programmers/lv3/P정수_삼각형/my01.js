function solution(triangle) {
    let check = new Array(500).fill(0);
    let arr = [];

    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            arr.push(triangle[i][j]);
        }
    }
    // 0 부터 갑시다.

    arr.unshift(0);

    let ans = go(1)
    console.log(check);


    return ans;

    function go(index) {
        // 자기보다 왼쪽 위랑 오른쪽 위가 있다면
        // 더 큰 값을 저장한다.
        if (index >= arr.length) return 0;

        if (check[index] > 0) return check[index];

        return check[index] = arr[index]
            + Math.max(go(index * 2),
                go(index * 2 + 1));
    }
}

/*
    왼쪽 아래로 내려가는 인덱스는 i * 2
    오른쪽 아래로 내려가는 인덱스는 (i * 2) - 1
 */

module.exports = solution;