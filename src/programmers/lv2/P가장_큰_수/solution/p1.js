function solution(numbers) {
  const numbersArr = numbers.map(v => v.toString());

  numbersArr.sort((a,b) => {
    return (b + a).localeCompare(a + b);
  });

  const ans = numbersArr;

  while(true) {
    if (ans[0] === '0' && ans.length !== 1) ans.shift();
    else break;
  }

  return ans.join('');
}

export default solution;

/*
  [2020_08_26]
  https://programmers.co.kr/learn/courses/30/lessons/42746

  모든 숫자의 자리수를 맞춘다음에 그걸 가지고 다 0을 붙이고 비교 하고 순서대로 출력하면 될듯

  예로들어서 그냥 각 숫자에 0 을 더 해서 하면 될 것 같은데?

  테케는 다 통과하는데 왜 서버에선 통과를 못하지 ㅠㅠ 뭐가 히든 케이스로 있나...

 */