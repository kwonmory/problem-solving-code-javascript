/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {

    const sArr = s.split('');

    if (s === sArr.slice().reverse().join('')) {
        return true;
    }

    for (let i = 0; i < sArr.length; i++) {
        const output = sArr.filter((_, index) => i !== index);

        if (output.join('') === output.slice().reverse().join('')) {
            return true;
        }
    }

    return false;
};

export default validPalindrome;

/*
    https://leetcode.com/problems/valid-palindrome-ii/
    어마어마한... 양의 테스트케이스에 시간 초과 떠버렸다.

 */