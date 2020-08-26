const isPrime = (number) => {

  if (number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(numbers) {
  const fragment = Array.from(numbers);

  const cache = new Set();

  go('', [...fragment].map(_ => false));

  const ans = [];

  for (let target of cache) {
    if (isPrime(target)) ans.push(target);
  }

  return ans.length;

  function go(made, check) {
    const number = Number(made);

    if (number !== 0)
      cache.add(number);

    if (check.findIndex(_ => _ === false) === -1) return;
    if (made.length > fragment.length) return;

    for (let i = 0; i < fragment.length; i++) {
      if (check[i]) continue;

      const check1 = check.slice().map((_, idx) => {
        if (idx === i) return true;
        else return _;
      });

      go(made,  check1);
      go(made + fragment[i], check1);
    }
  }
}

export default solution;

/*
  [2020_08_26]
  https://programmers.co.kr/learn/courses/30/lessons/42839

  앞뒤로 출력하게 하는 방법을 생각하느라 시간이 걸렸다.

  변수명이 조금 아쉽네..

  캐시가 아닌데 캐시라고 지어놨었네.. 나중을 위해 변경하지 말아야지~
 */