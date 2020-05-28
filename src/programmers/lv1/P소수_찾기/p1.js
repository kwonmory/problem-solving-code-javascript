function solution(n) {
    const ans = [];

    if (n === 1)
        return 0;

    for (let i = 2; i <= n; i++)
        isPrime(i) && ans.push(i);

    return ans.length;
}

function isPrime(number) {

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

export default solution;