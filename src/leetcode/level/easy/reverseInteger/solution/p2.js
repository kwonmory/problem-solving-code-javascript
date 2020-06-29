/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const numberJar = [];

    let tempX = Math.abs(x);

    while (tempX !== 0) {
        numberJar.push(tempX % 10);
        tempX = Math.floor(tempX / 10);
    }

    let number = Number(numberJar.join(''));

    if (number > 2 ** 31 - 1 || number < -(2 ** 31)) {
        return 0;
    }

    return x < 0 ? -number : number;
};

export default reverse;

/*
    https://leetcode.com/problems/reverse-integer/

    자바스크립트에서 숫자 나누기는 정수형이 아닌 실수형으로 나온다는 사실을 잊지말자.

  [다른분 풀이]

  var reverse = function(x) {
  if (x < 0) return -1 * reverse(-x);
  const r = parseInt(`${x}`.split('').reverse().join(''), 10);
  if (r > 2 ** 31 - 1) return 0;

  return r;
};
 */