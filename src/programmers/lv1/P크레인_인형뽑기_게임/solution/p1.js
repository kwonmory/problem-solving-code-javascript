let ans = 0;

function solution(board, moves) {
  const newBoard = makeQueueBoard(board);

  moves = moves.map(v => v - 1);

  const jar = []; // 저장 창고

  moves.forEach(move => {
    if (newBoard[move].length === 0) return;

    const target = newBoard[move].pop();
    jar.push(target);
    checkJar(jar);
  });

  return ans * 2;
}

function makeQueueBoard(board) {
  const newBoard = [...Array(board.length)].map(_ => []);

  board.forEach((list) => {
    list.forEach((item, index) => {
      if (item !== 0)
        newBoard[index].unshift(item)
    });
  });

  return newBoard;
}

function checkJar(jar) {
  if (jar.length < 2) {
    return;
  }

  if (jar[jar.length - 1] === jar[jar.length - 2]) {
    ans++;
    jar.pop();
    jar.pop();

    if (jar.length >= 2) {
      checkJar(jar);
    }
  }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/64061
 */