const s = require('./my01');

test.each([
    ['FRANCE', 'french', 16384],
    ['handshake', 'shake hands', 65536],
    ['aa1+aa2', 'AAAA12', 43690],
    ['E=M*C^2', 'e=m*c^2', 65536]
])('뉴스 클러스터링', (str1, str2, answer) => {
    expect(s(str1, str2)).toBe(answer);
})