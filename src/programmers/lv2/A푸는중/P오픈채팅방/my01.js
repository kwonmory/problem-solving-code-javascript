function solution(record) {

    let visitRecord = [];
    let accountRecord = [];

    record.forEach(v => {
        const word = v.split(' ');

        if (word[0] === 'Enter') {
            // 재 방문 했을 때, 이미 있다면 닉네임만 바꿔주기
            const targetIdx = accountRecord.findIndex(v => v.id === word[1]);
            if (targetIdx !== -1) {
                accountRecord[targetIdx] = {
                    id: accountRecord[targetIdx].id,
                    nickname: word[2]
                };
            } else {
                accountRecord.push({
                    id: word[1],
                    nickname: word[2]
                });
            }
            visitRecord.push({id: word[1], state: 'enter'});
        } else if (word[0] === 'Leave') {
            visitRecord.push({id: word[1], state: 'leave'});
        } else if (word[0] === 'Change') {
            const targetIdx = accountRecord.findIndex(v => v.id === word[1]);
            accountRecord[targetIdx] = {
                id: accountRecord[targetIdx].id,
                nickname: word[2]
            };
        }
    })

    let result = [];

    visitRecord.forEach(v => {
        const nickname = accountRecord.find(e => e.id === v.id).nickname;
        if (v.state === 'enter') {
            result.push(`${nickname}님이 들어왔습니다.`);
        } else {
            result.push(`${nickname}님이 나갔습니다.`);
        }
    });

    return result;

}


module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42888

    아이디는 유일함
    일단 객체를 만들어서 넣어주고, 객체의 부분이 바뀌면 다 바뀌지 않을까?
    indexOf 로 아이디 찾고~


    시간초과가 뜬다. 그래서 my02 로 넘어가보자.

 */