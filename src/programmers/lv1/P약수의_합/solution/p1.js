function solution(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += (n % i === 0) ? i : 0;
    }

    return sum;
}

export default solution;