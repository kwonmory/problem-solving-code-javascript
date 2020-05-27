/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (i === j) continue;

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

export { twoSum };

/*
    https://leetcode.com/problems/two-sum/

    [브루트 포스를 이용한 방법]

    Runtime: 152 ms, faster than 21.27% of JavaScript online submissions for Two Sum.
    Memory Usage: 36.4 MB, less than 10.75% of JavaScript online submissions for Two Sum.
 */