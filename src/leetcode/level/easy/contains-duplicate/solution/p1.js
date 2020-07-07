/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

export default containsDuplicate;

/*
    https://leetcode.com/problems/contains-duplicate/submissions/a

    Set을 하지 않고 어떻게 찾을 수 있을까,

    부스트캠프에서 나온 문제와 유사하다.

    n^2 으로 해결했지만, 그보다 낮은걸 찾아야한다.

    1. 정렬한 다음에 좌우를 비교해준다.
 */