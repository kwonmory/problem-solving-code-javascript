/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {

    let ans = 0;

    let current = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (current < prices[i]) {
            ans +=  prices[i] - current;
        }
        current = prices[i];
    }

    return ans;
};

console.log(maxProfit([7,1,5,3,6,4]));
/*

30000
10000

칸 하나하나 보다
자기가 가질 수 있는 최대값

인덱스마다, 돌면서 재귀로
들어가서


하나씩 올라가면서 더해주는구나..
 */