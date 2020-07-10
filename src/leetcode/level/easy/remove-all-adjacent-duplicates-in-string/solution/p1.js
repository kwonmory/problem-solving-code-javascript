/**
 * @param {string} S
 * @return {string}
 */
const  removeDuplicates = function(S) {
    let arr = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] !== arr[arr.length - 1]) arr.push(S[i]);
        else arr.pop();
    }

    return arr.join('');
};

export default removeDuplicates;

/*
    https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */