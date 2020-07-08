/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    return [...nums, target]
        .sort((a,b) => a - b)
        .findIndex(v => target === v);
};

export default searchInsert;

/*
    https://leetcode.com/problems/search-insert-position/
 */