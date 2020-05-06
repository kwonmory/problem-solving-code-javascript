function solution(n, stations, w) {
    let answer = 0;

    let arr = new Array(n).fill(false); // 0부터 시작 n-1 까지

    stations.forEach(v => {
        // -1
        arr[v-1] = true;
        for (let i = 1; i <= w; i++) {
            if (v-1+i < n)
                arr[v-1+i] = true;
            if (v-1-i >= 0)
                arr[v-1-i] = true;
        }
    });

    for (let v = 0; v < arr.length; v++) {
        if (!arr[v]) {
            // false 일 경우
            // + w 만큼 옮겨서 색칠
            if (v + w < n)
                arr[v+w] = true;

            for (let i = 1; i <= w; i++) {
                if (v+w+i < n)
                    arr[v+w+i] = true;
                if (v+w-i >= 0)
                    arr[v+w-i] = true;
            }
            v = v+w+w;
            answer++;
        }
    }

    // console.log(arr);

    return answer;
}

// console.log(solution(11, [4,11], 1, 3));
/*

    완탐?
    순열?
    재귀?
    재귀로 체크 안되어있는 자리 하나씩 둬가면서 체크해서 제일 작은 값을 출력?
    그리디 같은데.. 그냥 처음부터 차례대로 W만큼 건너 뛰면서 자리에 체크가 없으면 넣어주고,
    있으면 다음으로 넘어가면서 +W 만큼 체크해주고
 */