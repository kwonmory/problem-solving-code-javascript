/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    let ans = [];

    permutation([], [...Array(nums.length).map(v => false)]);

    function permutation(arr, check) {
        if (arr.length === nums.length) {
            ans.push(arr);
            return;
        }

        if (arr.length >= nums.length) {
            return;
        }

        for (let i = 0; i < nums.length; i++)
            if (!check[i]) {
                check[i] = true;
                permutation([...arr, nums[i]], [...check]);
                check[i] = false;
            }
    }

    return ans;
};

export default permute;

/*
    https://leetcode.com/problems/permutations/
 */