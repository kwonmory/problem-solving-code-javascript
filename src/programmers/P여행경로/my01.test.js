const s = require('./my01')

test.each([
    // [[['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']], ['ICN', 'JFK', 'HND', 'IAD']],
    [[['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']], ['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO']]
])("여행경로 테스트", (tickets, result) => {
    expect(s(tickets)).toStrictEqual(result);
});