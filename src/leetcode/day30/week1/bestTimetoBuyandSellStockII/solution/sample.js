//reduce()
var maxProfit = function(prices){
    return prices.reduce((res, v, i, arr) => {
        return v > arr[i - 1] ? res + v - arr[i - 1] : res;
    }, 0)
}

//easier to understand
var maxProfit = function(prices) {
    let res = 0;
    let cur = prices[0]
    for(let i = 1; i < prices.length; i ++){
        if(prices[i] > cur){
            res += prices[i] - cur;
        }
        cur = prices[i];
    }
    return res;
};