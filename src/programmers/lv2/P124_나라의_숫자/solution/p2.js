function solution(n) {
  const ans = [];

  while (n !== 0) {
    const target = Math.floor(n % 3);
    n = Math.floor(n / 3);

    if (target === 0) {
      ans.push(4);
      n -= 1;
      continue;
    }
    ans.push(target);
  }

  return ans.reverse().join('');
}

export default solution;

/*
  [2020_08_06]
  https://programmers.co.kr/learn/courses/30/lessons/12899
 */