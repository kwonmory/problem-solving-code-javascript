/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        const next = target - nums[i];

        for (let j = 0; j < nums.length; j++) {
            if (i === j || nums[j] > next) continue;

            if (next - nums[j] === 0) return [i, j];
        }

    }

};

export { twoSum };

/*
    https://leetcode.com/problems/two-sum/

    Runtime: 136 ms, faster than 25.84% of JavaScript online submissions for Two Sum.
    Memory Usage: 36.6 MB, less than 10.75% of JavaScript online submissions for Two Sum.

 */