function solution(genres, plays) {
    let myMap = new Map();
    let result = [];
    let genre = [];

    genres.forEach((v, i) => {
        if (myMap.has(v))
            myMap.set(v, myMap.get(v) + plays[i]);
        else
            myMap.set(v, plays[i]);
    });

    for (let a of myMap.entries()) {
        genre.push({name: a[0], amount: a[1]});
    }

    genre.sort((a, b) => {
            return a.amount < b.amount ? 1 : -1
        }
    );

    genre.forEach(v => {
        let tempList = [];
        for (let i = 0; i < genres.length; i++) {
            if (genres[i] === v.name) {
                // 이름과 같을 때,
                tempList.push({index: i, amount: plays[i]});
            }
        }
        tempList.sort((a, b) => {
            if (a.amount == b.amount) {
                return a.index > b.index ? 1 : -1;
            } else {
                return a.amount < b.amount ? 1 : -1;
            }
        });
        for (let i = 0; i < tempList.length; i++) {
            if (i == 2) break;
            result.push(tempList[i].index);
        }
    });

    return result;
}

// Test Code
// https://programmers.co.kr/learn/questions/7468 님 테스트 케이스 - 오타있음
let tc = [
    {
        name: 'default',
        param1: ["classic", "pop", "classic", "classic", "pop"],
        param2: [500, 600, 150, 800, 2500],
        result: [4, 1, 3, 0]
    },
    {
        name: 'normal',
        param1: ["a", "b", "a", "b", "c"],
        param2: [100, 200, 300, 400, 500],
        result: [3, 1, 4, 2, 0]
    },
    {
        name: 'onlyone',
        param1: ["a"],
        param2: [1],
        result: [0]
    },
    {
        name: 'onegenre',
        param1: ["a", "a", "a"],
        param2: [1, 1, 1],
        result: [0, 1]
    },
    {
        name: 'onepopular',
        param1: ["a", "b", "c", "b", "c", "d"],
        param2: [1000, 1, 2, 3, 4, 5],
        result: [0, 4, 2, 5, 3, 1]
    },
    {
        name: 'equal',
        param1: ["a", "a", "b", "b", "c", "c", "d", "d"],
        param2: [1, 1, 1, 1, 1, 1, 1, 1],
        result: [6, 7, 4, 5, 2, 3, 0, 1]
    },
    {
        name: 'q1',
        param1: ["classic", "pop", "classic", "pop", "classic", "classic"],
        param2: [400, 600, 150, 2500, 500, 500],
        result: [3, 1, 4, 5]
    },
    {
        name: 'equal2',
        param1: ["a", "a", "b", "c", "a", "a"],
        param2: [1, 2, 2, 2, 2, 2],
        result: [1, 4, 3, 2]
    },
    {
        name: '2results',
        param1: ["a", "b", "c", "d", "e", "f"],
        param2: [1, 2, 3, 4, 5, 6],
        result: [5, 4, 3, 2, 1, 0]
    },
    {
        name: '장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.',
        param1: ["a", "a", "d", "d", "c", "b"],
        param2: [5, 5, 3, 3, 5, 6],
        result: [0, 1, 5, 2, 3, 4]
    },
    {
        name: '장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.',
        param1: ["a", "a", "d", "d", "c", "b"],
        param2: [5, 5, 3, 3, 500, 6],
        result: [4, 0, 1, 5, 2, 3]
    }
];

console.log("=====테스트 시작=====");
tc.forEach(v => {
    if (solution(v.param1, v.param2).toString() === v.result.toString()) {
        console.log(`[pass] ${v.name} `);
    } else {
        console.log(`[fail] ${v.name}`);
    }
})