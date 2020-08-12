function solution(array, commands) {
  return commands.map(([i,j,k]) => {
      return array.slice(i-1, j).sort((a,b) => a - b)[k-1];
  });
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/42748
 */