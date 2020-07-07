/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
    const ans = [];
    nums = nums.sort((a, b) => a - b);

    go([], 0);

    return [...new Set(ans.map(JSON.stringify))].map(JSON.parse);

    function go(arr, index) {
        if (index === nums.length) {
            ans.push(arr);
            return;
        }

        if (index > nums.length - 1) {
            return;
        }

        go([...arr], index + 1);

        go([...arr, nums[index]], index + 1);
    }
};

export default subsetsWithDup;

/*
    https://leetcode.com/problems/subsets-ii
 */