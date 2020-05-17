const solution = require('./my01');

test.each([
    [[["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]], 2]
])('후보키 테스트', (relation, result) => {
    expect(solution(relation)).toBe(result);
});
