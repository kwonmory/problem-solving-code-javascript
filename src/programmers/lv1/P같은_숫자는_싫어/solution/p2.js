function solution(arr) {
  return arr.reduce((acc, v) => {
    if (acc[acc.length - 1] !== v) {
      acc.push(v);
    }
    return acc;
  }, [])
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/12906
 */