/*
    https://www.acmicpc.net/problem/2309
    간단한 문제였다. 하지만 처음 Node를 사용하는데 있어서 모르는 부분이 있었다.
    데이터를 불러올 때, split('\n')를 하게 된다면, 마지막부분까지 \n 으로 처리된다는 점이다.
    이 점 주의해야할 것 같다.
 */

const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .filter(v => v !== '');

const inputNumbers = input.map(v =>  Number(v)).sort((a,b) => a - b);

const sum = inputNumbers.reduce((acc, v) => acc += v);

for (let i = 0; i < input.length-1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if ((sum - inputNumbers[i] - inputNumbers[j]) === 100) {
            for (let k = 0; k < input.length; k++) {
                if (k !== i && k !== j) console.log(inputNumbers[k]);
            }
            return;
        }
    }
}