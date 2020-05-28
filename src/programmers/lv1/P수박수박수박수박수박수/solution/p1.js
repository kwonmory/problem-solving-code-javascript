function solution(n) {
    let arr = ['수', '박'];
    let ans = new Array(n).fill(0);

    return ans
        .map((v, index) => arr[index % 2 === 0 ? 0 : 1])
        .join('');
}

export default solution;

/*
    https://github.com/gyoogle/tech-interview-for-developer
 */