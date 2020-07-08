/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const ans = [];

    nums.reduce((acc, i) => {
        acc += i;
        ans.push(acc);
        return acc;
    }, 0);

    return ans;
};

export default runningSum;

/*
    https://leetcode.com/problems/running-sum-of-1d-array/

    const runningSum = nums => {
        nums.reduce((a,c,i,arr) => arr[i] += a)
        return nums
    }
 */