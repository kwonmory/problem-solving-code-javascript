/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }

    return [1, ...digits];
};

export default plusOne;

/*
    https://leetcode.com/problems/plus-one

    실패

    1. digits 값이 매우 클 수 있다.

 */