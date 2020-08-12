function solution(s) {
  const pos = Math.floor(s.length / 2);
  return (s.length % 2 === 0) ? s[pos-1] + s[pos] : s[pos]
}

export default solution;
/*
  https://programmers.co.kr/learn/courses/30/lessons/12903
 */