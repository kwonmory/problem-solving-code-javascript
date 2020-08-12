function solution(answers) {
  const hitCount = [0, 0, 0];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const ans = [];

  answers.forEach((p, index) => {
    if (p1[index % p1.length] === p) {
      hitCount[0]++;
    }
    if (p2[index % p2.length] === p) {
      hitCount[1]++;
    }
    if (p3[index % p3.length] === p) {
      hitCount[2]++;
    }
  });

  const max = Math.max(...hitCount);

  for (let i = 0; i < 3; i++) {
    if (max === hitCount[i]) {
      ans.push(i + 1);
    }
  }

  return ans;
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/42840
 */