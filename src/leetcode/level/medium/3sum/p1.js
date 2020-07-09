/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {

    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 1; i < nums.length; i++) {
        let lo = i;
        let hi = nums.length-1;

        while (lo < hi) {
            const sum = nums[i-1] + nums[lo] + nums[hi];
            if (sum === 0) ans.push([nums[i-1], nums[lo], nums[hi]]);
            if (sum < 0) {
                lo++;
            } else {
                hi--;
            }
            // -4 -1 -1 0 1 2
        }
    }
    console.log(ans);
    const done = new Set(ans.map(JSON.stringify));
    return [...done].map(JSON.parse);
};

export default threeSum;

/*
    https://leetcode.com/problems/3sum/

    시간이 초과가 되었다.
 */