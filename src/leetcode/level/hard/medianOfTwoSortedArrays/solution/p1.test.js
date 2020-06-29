import {findMedianSortedArrays} from './p1';
import {expect} from "@jest/globals";

test.each([
    [[1,3], [2], 2.0],
    [[1,2], [3,4], 2.5]
])('medianOfTwoSortedArrays Test', (nums1, nums2, result) => {
    expect(findMedianSortedArrays(nums1, nums2)).toBe(result);
})