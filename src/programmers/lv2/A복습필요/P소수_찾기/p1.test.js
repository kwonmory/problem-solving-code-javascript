import solution from './p1';
import {expect} from '@jest/globals';

test.each([
    ['17', 3],
    ['011', 2]
])('%d => %d ,소수 찾기', (numbers, ans) => {
    expect(solution(numbers)).toBe(ans);
});