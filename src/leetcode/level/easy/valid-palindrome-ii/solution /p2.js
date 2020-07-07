/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s, chance = 1) {
    console.log(s);
    let lo = 0;
    let hi = s.length - 1;
    
    while (lo < hi) {
        if (s[lo] === s[hi]) {
            lo++;
            hi--;
            continue;
        }

        if (chance === 0) {
            return false;
        }

        return validPalindrome(s.slice(lo, hi), 0)
        || validPalindrome(s.slice(lo + 1, hi + 1), 0);
    }

    return true;
};

export default validPalindrome;

/*
    https://leetcode.com/problems/valid-palindrome-ii/

    그럼 양쪽으로 점점 가면서 비교를 해보지!

    비교하다가 1번의 기회를 주는거야

    1번 초과하면 나가리
 */