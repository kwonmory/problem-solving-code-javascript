function solution(n, m) {
    if (n > m) {
        let temp = m;
        m = n;
        n = temp;
    }

    return [gcd(n,m), lcd(n,m)];
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, Math.floor(a % b));
}

function lcd(a, b) {
    return Math.floor(b * a / gcd(a,b));
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12940
 */
