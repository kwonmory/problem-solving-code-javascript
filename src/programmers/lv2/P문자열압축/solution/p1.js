function solution(s) {

  const set = [];

  for (let i = 1; i <= s.length; i++) {
      const target = Array.from(s);
      const stack = [];
      let str = '';

      while (target.length !== 0) {
        stack.push([...target.splice(0, i)].join(''));
      }

      while (stack.length !== 0) {
        const picked = stack[0];
        let count = 1;

        for (let i = 1; i < stack.length; i++) {
          if (stack[i] === picked) count++; else break;
        }

        if (count === 1) {
          str += picked;
        } else {
          str = `${str}${count}${picked}`;
        }

        for (let i = 0; i < count; i++) {
          stack.shift();
        }
      }
    set.push(str);
  }

  return set.map(v => v.length).sort((a,b) => a - b)[0];
}

export default solution;

/*
  [2020_08_26]
  https://programmers.co.kr/learn/courses/30/lessons/60057

  이 문제는 그래도 처음부터 나눠지는군\

  문제를 잘 이해해야한다. 왜 레벨2인지 알겠다.
 */