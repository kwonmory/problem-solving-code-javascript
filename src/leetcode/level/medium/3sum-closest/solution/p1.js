/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);

    let diff = Number.MAX_VALUE;
    let last = nums.length;

    for (let i = 0; i < last && diff !== 0; i++) {
        let lo = i + 1;
        let hi = last - 1;

        while(lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
            }
            if (sum < target) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return target - diff;

};

export default threeSumClosest;

/*
    https://leetcode.com/problems/3sum-closest/

    응?
    애초에 문제를 이해를 제대로 못하고 있었구나.
    3개의 합이 최소값이 되어야 된다는 의미였다.

    투 포인터!
 */