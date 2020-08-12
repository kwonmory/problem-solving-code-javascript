function solution(a, b) {
  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MONTH_COUNT = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let count = b;

  for (let i = 0; i < a - 1; i++) count += MONTH_COUNT[i];

  return DAYS[(count + 4) % 7];
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/12901
 */