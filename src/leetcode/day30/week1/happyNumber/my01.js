/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    // 숫자 자리수를 일단 구해야겠지
    // 20 => 4 + 0 => 16 => 그냥 한자리 일 때, 1이 아니면 false 를 뿜으면 되는군..
    const digitsArr = function(n) {
        let arr = [];

        while (n > 0) {
            let number = n % 10;
            arr.push(number ** 2);
            n = Math.floor(n / 10);
        }

        return arr;
    }

    let tmp = n;

    let limitCount = 0;

    while (true) {
        let resultNumber = digitsArr(tmp).reduce((acc, v) => acc += v, 0);

        if (resultNumber == 1) {
            return true;
        }

        tmp = resultNumber;

        limitCount++;
        if (limitCount >= 100000) {
            return false;
        }
    }

};

console.log(isHappy(232118609));

/*
7
49 => 4, 9
16, 81 => 97
81 + 49 => 130
1 + 9 + 0 => 10
1 + 0 => 1
 */