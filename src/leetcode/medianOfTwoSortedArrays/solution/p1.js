/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {

    const arr = [...nums1, ...nums2].sort((a, b) => a - b);

    const len = arr.length;

    if (len % 2 === 0) {
        return (arr[len / 2 - 1] + arr[len / 2]) / 2;
    }
    return arr[Math.floor(len/2)];
};

export {findMedianSortedArrays};

/*
    https://leetcode.com/problems/median-of-two-sorted-arrays/

    [생각]
    시간 복잡도가 m +  n 이 나와야하며,
     홀수랑 짝수 체크

    Runtime: 128 ms, faster than 43.11% of JavaScript online submissions for Median of Two Sorted Arrays.
    Memory Usage: 43.7 MB, less than 19.15% of JavaScript online submissions for Median of Two Sorted Arrays.
 */