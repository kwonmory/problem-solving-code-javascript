/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    while (stones.length !== 1) {
        if (stones.length === 0) return 0;
        stones.sort((a, b) => a - b);
        let [first, second] = stones.splice(stones.length-2, 2);
        if (second - first === 0) continue;
        else stones.push(second - first);
    }
    return stones[0];
};

// console.log(lastStoneWeight([2,7,4,1,8,1]));
// console.log(lastStoneWeight([2,2]));
/*

일단, 정렬을 한다. 가장 큰 수 2개를 고른다.
계산을 한다. 결과를 가지고 0 이면 다음 차례로 넘긴다.
0이 아니면 그 값을 넣어준다.

 */