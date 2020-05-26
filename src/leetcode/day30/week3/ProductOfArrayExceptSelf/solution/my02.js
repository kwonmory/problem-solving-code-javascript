/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {

    const left = new Array(nums.length).fill(0);
    const right = new Array(nums.length).fill(0);

    const ans = new Array(nums.length).fill(0);

    left[0] = 1;
    right[right.length - 1] = 1;

    for (let i = 1; i < left.length; i++) {
        left[i] = left[i-1] * nums[i-1];
    }

    for (let i = right.length - 2; i >= 0; i--) {
        right[i] = right[i+1] * nums[i+1];
    }

    return ans.map((v, index) => left[index] * right[index]);
};

module.exports = productExceptSelf;

/*
    [생각]
    * 1차 결과로 시간 초과가 나와서 다른 방법으로 문제를 풀어야한다.
    * 모든 값을 다 더하고 그 부분만 나누기 하면 되지 않을까 라는 생각을 했는데,
    * 조건 중에  Please solve it without division and in O(n). 라고 해서 나누기도 못하는 상황이다.

    [해석]
    * 왼쪽과 오른쪽 방향으로 차례로 데이터를 넣어놓고 각 자리를 곱해서 결과를 만들어나감

    [시뮬]
    1,2,3,4
    왼  쪽 :  1 1 2 6
    오른쪽 : 24 12 4 1
    결  과 : 24 12 8 6

    [후 생각]
    * 이걸 어떻게 생각할 수 있을까..
 */