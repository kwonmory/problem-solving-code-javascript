function solution(participant, completion) {
  const participantList = new Map();
  let ans = '';

  participant.forEach(person => {
    if (participantList.has(person)) participantList.set(person, participantList.get(person) + 1);
    else participantList.set(person, 1);
  });

  completion.forEach(person => {
    participantList.set(person, participantList.get(person) - 1);
  });

  participantList.forEach((value, key) => {
    if (value > 0) ans = key;
  });

  return ans;
}

export default solution;

/*
  https://programmers.co.kr/learn/courses/30/lessons/42576
 */