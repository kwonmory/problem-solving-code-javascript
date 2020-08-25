function solution(skill, skill_trees) {
  let ans = 0;

  skill_trees.forEach(trees => {
    const skillStack = skill.split('');
    const treeStack = trees.split('');

    while (treeStack.length !== 0) {
      if (skillStack.length !== 0 && skillStack.indexOf(treeStack[0]) >= 0) {
        if (skillStack[0] === treeStack[0]) {
          treeStack.shift();
          skillStack.shift();
        } else {
          break;
        }
      } else {
        treeStack.shift();
      }
    }

    if (treeStack.length === 0) ans++;
  });

  return ans;
}

export default solution;

/*
  [2020_08_25]
  https://programmers.co.kr/learn/courses/30/lessons/49993

  간단하게 순서만 기억했다가 순서가 앞뒤로 바뀌면 문제로 인식해서 처리해주면 될 것 같다.
  그런데 오더 N의 2승이 나오겠는걸..

  왜 오래걸렸을까?...

  하나씩 비교하면 되는데.. ans 증가를 이상한 곳에서 하고 있어서 10분을 날린 것 같다. 그리고 findIndex 를 쓸 때 마다
  콜백함수를 전달하지 않고 있는 부분을 까먹고 있다 ㅠ
 */