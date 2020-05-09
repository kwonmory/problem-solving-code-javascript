function solution(x) {
    let tmp = x;
    let sum = 0;

    while (tmp !== 0) {
        sum += tmp % 10;
        console.log(sum);
        tmp = Math.floor(tmp/10);
    }

    return (x % sum === 0);
}

module.exports = solution;