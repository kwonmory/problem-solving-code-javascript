
/*
    효율성에서 시간초과 코드
 */

function solution(s) {
    let answer = 0;

    let stack = [];

    let sArr = [...s];

    sArr.map(e => {
        stack.push(e);
        stackDuplicationElementCheckFunc(stack); // 스텍 내용 비교
    });

    if (stack.length === 0) {
        answer = 1;
    }

    return answer;
}

// 스택에 집어넣었을 때, 중복된 값이 있는지 체크하는 함수
function stackDuplicationElementCheckFunc(stack) {
    if (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
        // 이미 있다면
        stack.pop();
        stack.pop();
        stackDuplicationElementCheckFunc(stack);
    } else {
        return;
    }

}

console.log(solution("baabaa"));
console.log(solution("cdcd"));