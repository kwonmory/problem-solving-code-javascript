/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    return nums.map((v, index, arr) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)].reduce((acc, t) => acc *= t);
    });
};

module.exports = productExceptSelf;

/*

    [지식 습득]
    1. product 의 뜻은 곱!

    [생각]
    * 동일한 숫자가 나올 수 있을까.

    [결과]
    * Time Limit Exceeded

 */