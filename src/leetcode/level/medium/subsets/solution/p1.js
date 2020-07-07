/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const ans = [];

    go([], 0);

    console.log(ans);
    return ans;

    function go(arr, index) {
        // arr 은 복제된 배열

        if (index === nums.length) {
            ans.push(arr);
            return;
        }

        if (index > nums.length - 1) {
            return;
        }

        go([...arr], index+1);
        go([...arr, nums[index]], index+1);
    }
};

export default subsets;

/*
    https://leetcode.com/problems/subsets/
    재귀를 이용한 방법으로 하나씩 채우는 방법?
 */