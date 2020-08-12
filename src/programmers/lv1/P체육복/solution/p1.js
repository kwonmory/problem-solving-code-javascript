function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  const same = [];

  reserve.forEach(v => {
    lost.forEach(w => {
      if (v === w) {
        same.push(v);
      }
    });
  });

  same.forEach(v => {
    reserve.splice(reserve.findIndex(s => s === v), 1);
    lost.splice(lost.findIndex(s => s === v), 1);
  })

  for (let i = reserve.length - 1; i >= 0; i--) {
    const reserveStudent = reserve[i];

    for (let j = lost.length - 1; j >= 0; j--) {
      const lostStudent = lost[j];

      if (reserveStudent === lostStudent - 1
        || reserveStudent === lostStudent + 1) {
        lost.splice(j, 1);
        break;
      }
    }
  }

  return n - lost.length;
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
 */