/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const ans = Number(String(Math.abs(x)).split('').reverse().join(''));
   return x < 0 ? -ans : ans;
};

export default reverse;

/*
    https://leetcode.com/problems/reverse-integer/

    이 해답은 틀린 답이다!

    범위가 엄청 클 땐 숫자로 담지 못하기 때문이다.

    그래서 하나씩 나눠가면서 마지막에 문자열로 합치는 방법을 사용하자.

    p2에서.
 */