/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {

    if (x < 0) return false;

    return x.toString() === x.toString().split('').reverse().join('');
};

export default isPalindrome;

/*
    https://leetcode.com/problems/palindrome-number/
 */