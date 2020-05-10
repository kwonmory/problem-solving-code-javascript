function solution(n, arr1, arr2) {

    let arr = []; // 임시 저장소
    let ans = [];

    for (let i = 0; i < n; i++)
        arr.push(arr1[i] | arr2[i]);


    // 이제 각 배열 요소마다, 5자리를 기준으로 처리하면 되는데
    // 여기서 비트연산자를 생각해볼 시간이다.
    // 1 << 0 을 해서 만들면 00001 이고
    // 1 << 1 을 해서 만들면 00010 이고
    // 1 << 2 을 해서 만들면 00100 이고
    // 하나씩 비교하면서 각 자리수를 찾으면 될듯

    arr.forEach(v => {
        let str = [];
        for (let i = 0; i < n; i++)
            if (v & (1 << i)) str.push("#");
            else str.push(" ");

        ans.push(str.reverse().join(""));
    });

    return ans;
}

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]);

/*

이 문제는 비트 연산자를 사용할 수 있는 지 물어보는 문제
그럼 둘이 0 과 1 일 때 1
1 과 1 일 때 1

 */