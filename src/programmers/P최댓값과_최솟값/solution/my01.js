function solution(s) {
    const sArr = s.split(' ').map(v => parseInt(v));

    return `${Math.min.apply(null, sArr)} ${Math.max.apply(null, sArr)}`;
}