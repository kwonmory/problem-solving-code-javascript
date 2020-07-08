/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    let ans = [];

    const arr = nums.reduce((_, v, i) => {
        (n > i) ? _.first.push(v) :  _.second.push(v);
        return _;
    }, {first: [], second: []});

    for (let i = 0; i < arr.first.length; i++) {
        ans.push(arr.first[i], arr.second[i]);
    }

    return ans;
};

export default shuffle;

/*
    https://leetcode.com/problems/shuffle-the-array/
 */