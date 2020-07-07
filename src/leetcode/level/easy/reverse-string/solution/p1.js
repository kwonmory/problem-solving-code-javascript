/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    return s.reverse();
};

export default reverseString;

/*
    https://leetcode.com/problems/reverse-string/

    var reverseString = function(s) {
      if (s.length < 2) return s;
      let start = 0,end = s.length - 1;
      while (end > start) {
        [s[start], s[end]] = [s[end], s[start]]; // es6 swap trick
        end--;
        start++;
      }
    };
 */