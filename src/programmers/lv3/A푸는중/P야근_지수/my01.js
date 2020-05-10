function solution(n, works) {
    let sum = works.reduce((acc, v) => acc += v, 0);
    let worksDay = works.length;

    let remainSum = sum - n;

    if (remainSum <= 0) {
        return 0;
    }

    let dis = Math.floor(remainSum / worksDay);

    let target = remainSum;
    let arr = [];
    while (target > dis && arr.length+1 < worksDay) {
        arr.push(dis);
        target -= dis;
    }
    arr.push(target);

    console.log(arr);
    const result = arr.map(v => v*v).reduce((acc, v) => acc += v, 0);
    return result;
}

module.exports = solution;

/*
야근 피로도 = 야근 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값
1시간 동안 1만큼 처리 가능

 */