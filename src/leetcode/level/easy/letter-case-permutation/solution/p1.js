/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {

    const ans = [];
    S = S.toLowerCase();

    go([], 0);

    return [...new Set(ans)];

    function go(str, index) {
        if (str.length === S.length) {
            ans.push(str.join(''));
            return;
        }

        if (index > S.length-1) {
            return;
        }

        go([...str, S.charAt(index)], index+1);

        let nextStr = '';

        if (S.charAt(index) >= 'a' && S.charAt(index) <= 'z') {
            nextStr = S.charAt(index).toUpperCase();
        } else {
            nextStr = S.charAt(index).toLowerCase();
        }
        go([...str, nextStr], index+1);
    }
};

export default letterCasePermutation;

/*
    https://leetcode.com/problems/letter-case-permutation/
 */