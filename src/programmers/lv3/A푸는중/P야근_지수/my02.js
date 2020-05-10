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

n을 적절하게 분배해서 일을 줄이고, 그리고 남은 거 가지고 하면 되는데
그런데 값이 크니깐
값을 어떻게 다뤄야할까


 */