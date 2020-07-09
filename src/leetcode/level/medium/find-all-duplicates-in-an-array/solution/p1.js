/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
    nums.sort((a, b) => a - b);
    let pos = 0;
    while (pos < nums.length) {
        if (nums[pos] !== nums[pos+1]) {
            nums.splice(pos, 1);
        } else {
            pos++;
        }
    }

    return nums;
};

export default findDuplicates;

/*
    https://leetcode.com/problems/find-all-duplicates-in-an-array/

    추가 공간없이
    시간복잡도 n 인 걸로
 */