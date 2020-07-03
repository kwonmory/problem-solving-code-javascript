import solution from "./p2";

test('스킬트리 테스트', () => {
    expect(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})