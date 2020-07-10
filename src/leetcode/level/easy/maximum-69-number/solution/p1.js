/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    const arr = num.toString().split('');
    const index = arr.findIndex(v => v === '6');

    if (index !== -1)
        arr[index] = '9';

    return Number(arr.join(''));
};

export default maximum69Number;

/*
    https://leetcode.com/problems/maximum-69-number/
 */