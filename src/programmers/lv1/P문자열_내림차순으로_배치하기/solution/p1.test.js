import solution from "./p1";

test('문자열 내림차순으로 배치하기 테스트', () => {
    expect(solution('Zbcdefg')).toBe('gfedcbZ');
});