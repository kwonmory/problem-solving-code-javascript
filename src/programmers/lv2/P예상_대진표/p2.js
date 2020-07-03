function solution(n, a, b) {
    // a랑 b랑 위치
    if (a > b) {
        let tmp = b;
        b = a;
        a = tmp;
    }

    let rans = 0;

    // 중간에서 왼쪽에 있나 오른쪽에 있나
    // 둘다 왼쪽이면 반으로 짜르기
    // 둘다 오른쪽이면 반으로 짜르기
    // 둘다 반대방향에 있다면 반의반의반으로 나누서 계산
    // 왼쪽이면 쪽 반을 짤라서 계산
    go(n, a, b);

    return rans;
    function go(n, a, b) {
        let number = Math.floor(n / 2);
        if (number <= a && number <= b) {
            // 둘다 왼쪽인가요?
            go(number, a - number, b -number);
            return;
        } else if (number >= a && number >= b) {
            // 둘다 오른쪽인가요?
            go(number, a, b);
            return;
        } else if (number >= a && number <= b) {
            // 따로따로 있나요?
            console.log(n);
            let ans = 0;
            while (n !== 1) {
                n /= 2;
                ans++;
            }
            console.log(ans);
            rans = ans+1;
            return;
        }
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12985

    각 위치를 반으로 줄여나가면 된다?

    이래도 오래걸리네.. 아무래도 2의 20승이라서..
 */