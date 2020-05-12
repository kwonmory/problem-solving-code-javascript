const s = require('./my01');

test.each([
    [
        3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'], 50
    ], [
        3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'], 21
    ], [
        2, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'], 60
    ], [
        5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'], 52
    ], [
        2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'], 16
    ], [0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'], 25]
])('캐시 테스트', (size, cities, result) => {
    expect(s(size, cities)).toBe(result);
})