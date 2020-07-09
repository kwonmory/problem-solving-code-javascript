/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {

    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let lo = i + 1;
        let hi = nums.length - 1;

        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            if (sum < 0) {
                lo++;
            } else if (sum > 0) {
                hi--;
            } else {
                ans.push([nums[i], nums[lo], nums[hi]]);
                while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                while (lo < hi && nums[hi] === nums[hi - 1]) hi--;

                lo++;
                hi--;
            }
        }
    }

    return ans;
};

export default threeSum;

/*
    https://leetcode.com/problems/3sum/

    시간이 초과가 되었다.
 */