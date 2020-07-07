/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    if (s === null || s.length === 0) return s;

    const chars = s.split('');
    let low = 0;
    let high = s.length - 1;
    const vowels = 'aeiouAEIOU';

    while (low < high) {
        while (low < high && vowels.indexOf(chars[low]) === -1) {
            low++;
        }

        while (low < high && vowels.indexOf(chars[high]) === -1) {
            high--;
        }

        [chars[low], chars[high]] = [chars[high], chars[low]];
        low++;
        high--;
    }

    return chars.join('');
};

export default reverseVowels;

/*
    https://leetcode.com/problems/reverse-vowels-of-a-string/

    1. 모음을 찾고 변수에 저장해놓고 특정값으로 바꿔놓는다.
    2. 저장해놓은 모음을 반전시킨다.
    3. 특정값에 차례데로 넣는다.

    var reverseVowels = function(s) {
    if(s === null || s.length === 0) {
        return s;
    }
    var chars = s.split('');
    var low = 0;
    var high = s.length - 1;
    var vowels = "aeiouAEIOU";
    var tmp;
    while(low < high) {
        while(low < high && vowels.indexOf(chars[low]) === -1) {
            low++;
        }

        while(low < high && vowels.indexOf(chars[high]) === -1) {
            high--;
        }

        tmp = chars[high];
        chars[high] = chars[low];
        chars[low] = tmp;
        low++;
        high--;
    }

    return chars.join('');
};
 */