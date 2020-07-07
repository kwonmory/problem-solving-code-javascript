/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const str = s.replace(/\W|_/g, '').toLowerCase().split('');
    return str.join('') === str.reverse().join('');
};

export default isPalindrome;

/*
    https://leetcode.com/problems/valid-palindrome/
 */