function solution(record) {
    let visitRecord = [];
    let accountRecordMap = new Map();
    let ans = [];

    record.forEach(v => {
        const word = v.split(' ');

        if (word[0] === 'Enter') {
            // 재 방문 했을 때, 이미 있다면 닉네임만 바꿔주기
            accountRecordMap.set(word[1], word[2]);
            visitRecord.push({id: word[1], state: 'enter'});
        } else if (word[0] === 'Leave') {
            visitRecord.push({id: word[1], state: 'leave'});
        } else if (word[0] === 'Change') {
            accountRecordMap.set(word[1], word[2]);
        }
    })

    visitRecord.forEach(v =>
        ans.push(`${accountRecordMap.get(v.id)}님이 ${v.state === 'enter' ? '들어왔습니다.':'나갔습니다.'}`)
    );

    return ans;
}


module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42888

    2차는 account 를 Map을 이용해보자.
    아무래도 find 하는데 시간이 오래걸리는 듯하다. n^2 정도 나오는거 같다.

 */