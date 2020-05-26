/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
    let lo = 0, hi = 0;

    for (let i = 0; i < s.length; i++) {
        lo += (s.charAt(i) === '(' ? 1 : -1);
        hi += (s.charAt(i) !== ')' ? 1 : -1);
        if (hi < 0) break;
        lo = Math.max(lo, 0);
    }

    return lo === 0;
};

export default checkValidString;

/*
    그리디를 이용한 문제 풀이 방법
 */