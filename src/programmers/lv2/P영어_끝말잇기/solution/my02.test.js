const s = require('./my02');

test.each([
    [3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'], [3, 3]],
    [5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure',
        'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive'], [0, 0]],
    [2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'], [1, 3]]
])('영어 끝말잇기 테스트', (n, words, result) => {
    expect(s(n, words)).toStrictEqual(result);
});
