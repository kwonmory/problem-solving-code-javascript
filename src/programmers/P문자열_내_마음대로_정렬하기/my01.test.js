const s = require('./my01');

test.each([
    [['sun', 'bed', 'car'], 1, ['car', 'bed', 'sun']],
    [['abce', 'abcd', 'cdx'], 2, ['abcd', 'abce', 'cdx']]
])('문자열 내 마음대로 정렬하기', (strings, n, result) => {
    expect(s(strings, n)).toStrictEqual(result);
});