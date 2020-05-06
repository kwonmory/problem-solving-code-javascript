function solution(budgets, M) {

    budgets.sort((a, b) => a - b);

    const firstCheckOfSum = budgets.reduce((acc, v) => {
        acc += v;
        return acc;
    }, 0);

    if (firstCheckOfSum < M) {
        return budgets[budgets.length -1];
    }

    let min = 0;
    let max = budgets[budgets.length-1];
    let mid = 0;
    let sum = 0;
    let cmpMid = 0;

    while (true) {
        sum = 0;

        mid = Math.floor((max + min) / 2);

        if (cmpMid === mid) {
            return mid;
        }

        // sum 구하기

        for (let i = 0; i < budgets.length; i++) {
            if (mid <= budgets[i]) {
                sum += mid * (budgets.length - i);
                break;
            } else {
                sum += budgets[i]
            }
        }

        // sum = newBudgets.reduce((acc, v) => {
        //     if (v > mid) { acc += mid }
        //     else acc += v;
        //     return acc;
        // }, 0);

        if (sum > M) {
            max = mid;
        } else {
            min = mid;
        }
        cmpMid = mid;
    }


}

module.exports = solution;

/*
    먼저 정렬하고, 하나씩 빼면서 M이 0 이상이면


    110 120 140 150

    110 120 / 140 150

    110 / 120 / 140 / 150


 */