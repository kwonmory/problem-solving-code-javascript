function solution(n) {

    const arr = [...Array(n+1)].map(_ => 0);

    arr[0] = 1;
    arr[1] = 1;

    for (let i = 2; i < arr.length; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567;
    }

    return arr[n];
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12914

    1,2칸 가능
    1 또는 2칸
 */