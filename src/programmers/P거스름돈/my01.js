let cho = [];

function solution(n, money) {
    money = money.sort((a,b) => a - b);
    return go(n, money, 0, 0, "");
}

// money = 주어 진 금액
// moneyUnit = 화페 단위
// count = 현재 금액
// index = 돈 단위를 선택할 위치

function go(money, moneyUnit, index, sum, choices) {
    if (sum === money) {
        return 1;
    }

    if (sum >= money || index >= moneyUnit.length) {
        return 0;
    }

    let ans = 0;

    // for (let i = 0; i < moneyUnit.length; i++) {
    if (sum + moneyUnit[index] <= money) {
        // 포함시키기
        ans += go(money, moneyUnit, index, sum + moneyUnit[index]);
    }
        // 다음턴으로 넘기기
        ans += go(money, moneyUnit, index + 1, sum);
    // }

    ans %= 1000000007;

    return ans;
}

console.log(solution(4, [1, 2, 5]));

/*
    돈의 종류가 money
    n 이 돈이네

    순서대로
    1원을 사용해서 하는 방법
    -> 1원 과 또는 2원 5원

    사용한 화폐 단위를 저장
    정렬해서 이미 있다면 호출하지 않음

 */