import solution from './p1';

test('숫자 야구', () => {
    expect(solution([
        [123, 1, 1],
        [356, 1, 0],
        [327, 2, 0],
        [489, 0, 1],
    ]))
    .toBe(2);
});