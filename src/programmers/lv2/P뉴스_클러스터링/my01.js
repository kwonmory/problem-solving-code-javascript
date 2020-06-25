function solution(str1, str2) {
    var answer = 0;

    const designStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    const designStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

    // 이제 저걸 잘라야지
    // 그런데 저걸 어떻게 집합으로 표현할 것인가
    // 먼저 Set 을 이용하면 교집합을 표현 못하는구나
    // 집합을 만들고 정렬이 필요하겠군

    let str1Arr = [];
    let str2Arr = [];

    for (let i = 0; i < designStr1.length - 1; i++) {
        str1Arr.push(designStr1.substr(i, 2));
    }
    for (let i = 0; i < designStr2.length - 1; i++) {
        str2Arr.push(designStr2.substr(i, 2));
    }

    str1Arr.sort();
    str2Arr.sort();

    let union = [];
    let intersection = [];

    // 같으면 교집합에
    // 다르면 합집합에
    let turn = 0;
    let i = 0;
    let j = 0;
    while (i < str1Arr.length || j < str2Arr.length) {
        if (str1Arr[i] === str2Arr[j]) {

            intersection.push(str1Arr[i]);
            union.push(str1Arr[i]);
            i++;
            j++;
        } else {
            if (turn === 0) {
                if (str1Arr[i] !== undefined)
                    union.push(str1Arr[i]);
                i++;

                turn = 1;
            } else {
                if (str2Arr[j] !== undefined) {
                    union.push(str2Arr[j]);
                }
                j++;

                turn = 0;
            }
        }
    }

    console.log(str1Arr)
    console.log(str2Arr)

    console.log(union);
    console.log(intersection);

    console.log(intersection.length);
    console.log(union.length);

    let wow = ((intersection.length / union.length) * 65536).toFixed(0);
    return Number(wow);
}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/17677

    두 글자씩 끊어서 다중집합의 원소로 만든다.


    두 글자씩 끊어서 다중 집합의 원소 만들기

    1. 문자열을 온전한 문자로 만들어야함
    2. 만든 문자 소문자로 다 바꾸기

    음.. 집합을 어떻게 표현하지..
    1 1 2 2 3
    1 2 2 4 5

    교 : 1 2 2
    합 : 1 1 2 2 3 4 5

    같을 땐 인덱스 둘다 높혀주고, 합집에 넣어주고 교집에 넣어주고
    다를 땐 위쪽 인덱스를 + 하면서 비교

    FR RA AN NC CE
    FR RE EN NC CH

    교 : RF NC
    합 : RF RA, RE, AN EN NC CE CH
 */