const solution = require('./my01.js');

test.each([
    [1,1,5,["08:00", "08:01", "08:02", "08:03"], "09:00"],
    [2,10,2,['09:10', '09:09', '08:00'], "09:09"],
    [2,1,2,['09:00', '09:00', '09:00', '09:00'], "08:59"],
    [1,1,5, ['00:01', '00:01', '00:01', '00:01', '00:01'], "00:00"],
    [1,1,1, ['23:59'], "09:00"],
    [10,60,45,['23:59','23:59', '23:59', '23:59', '23:59', '23:59', '23:59',
        '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59'], "18:00"]
])('셔틀버스 테스트', (n,t,m,timetable, result) => {
    expect(solution(n,t,m,timetable)).toBe(result);
});