const s = require('./my01');

test.each([
    ['try hello world', 'TrY HeLlO WoRlD'],
    ['sp ace', 'Sp AcE']
])('이상한 문자 만들기 테스트', (a , result) => {
    expect(s(a)).toBe(result);
});
