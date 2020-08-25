function solution(priorities, location) {
  const ans = [];
  const store = priorities.map((v, index) => {
    return {
      priority: v,
      name: index,
    }
  });

  while (store.length !== 0) {
    const target = store.shift();
    const values = store.map(v => v.priority);
    if (target.priority < Math.max(...values)) {
      store.push(target);
    } else {
      ans.push(target);
    }
  }

  return ans.findIndex(v => v.name === location) + 1;
}

export default solution;

/*
  [2020_08_25]
  https://programmers.co.kr/learn/courses/30/lessons/42587
 */