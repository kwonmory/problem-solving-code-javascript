function solution(n, arr1, arr2) {
  const ans = [];

  arr1.forEach((arr1Number, index) => {
    ans.push(arr1Number | arr2[index]);
  });

  return ans.map(number => printMap(number, n));
}

function printMap(number, n) {
  const bit = [];

  while (number !== 0) {
    const n = number % 2;
    bit.unshift(n);
    number = Math.floor(number / 2);
  }

  const bitSize = bit.length;

  for (let i = 0; i < n - bitSize; i++) bit.unshift(0);

  return bit.map(v => v === 1 ? '#' : ' ').join('');
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
 */