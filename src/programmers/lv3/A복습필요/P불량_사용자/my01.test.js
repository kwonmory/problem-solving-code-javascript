import {describe, expect} from "@jest/globals";
import solution from './my01';

describe('불량 사용자 테스트', () => {
    test.each([
        [["frodo", "fradi", "crodo", "abc123", "frodoc"],
            ["fr*d*", "abc1**"], 2],
        [["frodo", "fradi", "crodo", "abc123", "frodoc"],
            ["*rodo", "*rodo", "******"], 2],
        [["frodo", "fradi", "crodo", "abc123", "frodoc"],
            ["fr*d*", "*rodo", "******", "******"], 3]
    ])('불량 사용자 테스트', (userId, bannedId, result) => {
        expect(solution(userId, bannedId)).toBe(result);
    })
});