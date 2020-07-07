/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    return (Number(digits.join(''))+1).toString().split('').map(v => Number(v));
};

export default plusOne;

/*
    https://leetcode.com/problems/plus-one

    실패

    1. digits 값이 매우 클 수 있다.

 */