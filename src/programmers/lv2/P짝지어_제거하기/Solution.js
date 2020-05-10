function solution(s) {
    let answer = 0;

    let limitCount = 0; // 제한 카운트 변수

    let postPointer = 0;
    let afterPointer = 1;

    let sArr = [...s];

    for (let i = 0; i < sArr.length; i++) {
        // 만약에 다르다면 두개다 올려주기
        if (sArr[postPointer] !== sArr[afterPointer]) {
            postPointer++;
            afterPointer++;
        } else {
            // 만약 같다면 제거하기
            sArr[postPointer] = -1;
            sArr[afterPointer] = -1;

            // 그리고 포인터 위치를 옮겨준다.
            if (postPointer - 1 < 0 && sArr[postPointer] === -1) {
                postPointer = afterPointer + 1;
                afterPointer += 2;
            } else {
                postPointer -= 1;
                afterPointer += 1;
            }
        }
    }

    // console.log(sArr);

    if (sArr.filter(v => v != -1).length == 0) {
        answer = 1;
    }

    return answer;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));