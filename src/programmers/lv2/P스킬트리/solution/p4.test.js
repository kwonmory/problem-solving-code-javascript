import solution from "./p4";

test('스킬트리 테스트', () => {
    expect(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", "ASF"])).toBe(3);
})