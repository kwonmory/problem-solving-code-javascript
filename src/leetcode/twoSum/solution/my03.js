/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

};

export { twoSum };

/*
    https://leetcode.com/problems/two-sum/

    [원 맵를 이용한 방법]

    Runtime: 72 ms, faster than 56.23% of JavaScript online submissions for Two Sum.
Memory Usage: 37.2 MB, less than 7.85% of JavaScript online submissions for Two Sum.
 */