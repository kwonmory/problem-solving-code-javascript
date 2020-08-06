/*
    https://www.acmicpc.net/problem/1476
 */

const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ');

const inputNumbers = input.map(v => Number(v));

let E = inputNumbers[0];
let S = inputNumbers[1];
let M = inputNumbers[2];
let e = 1;
let s = 1;
let m = 1;
let count = 1;

while (true) {
    if (E === e && S === s && M === m) {
        console.log(count);
        return;
    }

    e++;
    s++;
    m++;
    count++;

    if (e === 16) {
        e = 1;
    }

    if (s === 29) {
        s = 1;
    }

    if (m === 20) {
        m = 1;
    }
}