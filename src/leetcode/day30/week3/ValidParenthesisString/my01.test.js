import checkValidString, {checkParenthesis} from './my01';
import {describe} from "@jest/globals";

test.each([
    ["()", true],
    ["(*)", true],
    ["(*))", true],
    ["(*)()", true],
    ["((**))", true],
    ["((*)", true],
    ["((*)*", true],
    ["(())()())(*))(((((())()*))**))**()(*(()()*)(**(())()**)((**(()(((()()**)())*(*))(())()()*", false],
    // ["()*((()(((((*))))((*()((*(())()(**)()()*))((((()**((())((()()(()(()()*)()))(()))))))*(((()()()())()", false]
])('ValidParenthesisString Test', (input, result) => {
    expect(checkValidString(input)).toBe(result);
});

describe('부분 함수 테스트', () => {
    test('checkParenthesis test', () => {
        expect(checkParenthesis('(())')).toBeTruthy();
    });

    test('checkParenthesis test', () => {
        expect(checkParenthesis('(()))')).toBeFalsy();
    });
});

