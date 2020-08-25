function solution(progresses, speeds) {
  const ans = [];
  const MAX_PROGRESS = 100;
  let works = [];

  progresses.slice().forEach((v, index) => {
    works.push(Math.ceil((MAX_PROGRESS - v) / speeds[index]));
  });

  while(works.length !== 0) {
   const first = works[0];

   let count = 0;

   for (let i = 0; i < works.length; i++) {
     if (first >= works[i]) count++;
     else break;
   }

    ans.push(count);

    works.splice(0, count);
  }

  return ans;
}

export default solution;

/*
  [2020_08_25]
  https://programmers.co.kr/learn/courses/30/lessons/42586

  문제를 접근할 때, 먼저 정제된 값이 있으면 좋겠다는 생각을 하고 풀었던 문제
 */