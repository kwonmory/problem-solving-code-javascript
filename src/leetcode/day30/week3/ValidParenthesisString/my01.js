/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
    if (s === '') return true;

    const ansCheck = [];
    makeParenthesis(ansCheck, s, 0, '');

    return ansCheck.length !== 0;
};

/**
 *
 * @param originalString 원본 문자열
 * @param index 인덱스
 * @param currentString 만들어진 문자열
 */
function makeParenthesis(ansCheck, originalString, index, currentString) {
    console.log(currentString);

    if (ansCheck.length >= 1 || index > originalString.length) {
        return;
    }

    if (originalString.length === index) {
        // 다 만들어진 상태
        // console.log(currentString);
        if (checkParenthesis(currentString)) ansCheck.push(true);
        return;
    }

    if (currentString.length >= 1) {
        // ) 가 더 많으면 사실 문제가 있는거지

        if (!isRightPartParenthesis(currentString)) return;
    }

    if (originalString.charAt(index) === '(') {
        makeParenthesis(ansCheck, originalString, index + 1, currentString + '(')
    } else if (originalString.charAt(index) === ')') {
        makeParenthesis(ansCheck, originalString, index + 1, currentString + ')')
    } else {
        makeParenthesis(ansCheck, originalString, index + 1, currentString + '(');
        makeParenthesis(ansCheck, originalString, index + 1, currentString + ')');
        makeParenthesis(ansCheck, originalString, index + 1, currentString);
    }
}

function isRightPartParenthesis(s) {
    const arr = s.split('');

    const right = arr.filter(v => v === ')').length;
    const left = arr.filter(v => v === '(').length;

    return right <= left;
}

/**
 *
 * @param s
 * @return {boolean}
 */
function checkParenthesis(s) {
    const leftStack = [];

    let arr = s.slice();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            leftStack.push('(');
        } else {
            if (leftStack.length >= 1)
                leftStack.pop();
            else return false;
        }
    }

    return leftStack.length === 0;
}

export {checkParenthesis};
export default checkValidString;

/*

    영어부터.. Parenthesis 는 괄호다 ()
    brackets 은 [] 이다.
    (, ), * 만 존재한다.
    1. ( 는 꼭 ) 로 대응해야된다.
    2. )는 꼭 (와 대응해야된다.
    3. * 는 ( 또는 ), 비어있음 로 변신할 수 있다.
    4. 비어있는 것도 인정함

    방법 생각
    1번 ( 가 나오면 스택에 집어넣기
    2번 ) 가 나오면 스택에서 빼기
    3번 * 가 나오면 히든 스택에 넣기
    그리고 다음 괄호가 맞는지 체크하는 과정에서
    맞지 않으면 히든 스택을 확인해본다.
    있다면 처리해주고
    그런데 미리 있다면 처리하기가 까다롭네..
    해당 별표 기준으로 뒤에 ( 와 ) 가 몇갠지 개수를 새면 되나
    아니면 조건을 검사하는게 아니라 모든 조건을 검사한느 완전탐색으로 풀 수 있을까
    * 가 나올 때마다 3가지 조건을 가지고 가는거지

    아니다. 음.. * 를 일단 모든 가지수로 만들어서 체크하면되잖아?

    미리 차단도 했지만, *가 10개가 넘어가면 안 끝나네..
 */