function solution(citations) {
    let answer = 0;

    for (let h = 1; h <= 10000; h++) {
        let data = citations.filter(v => v >= h);
        let lowData = citations.filter(v => v < h);
        if (data.length >= h && lowData.length < h) {
            answer = Math.max(answer, h);
        }
    }
    return answer;
}

console.log(solution([3, 0, 6, 1, 5]	));
/*

n 편 중, h 번 이상 인용된 논문이 h 편 이상이고, 나머지 논문이 h번
이하 인용되었으면 h의 최댓값이 이 과학자 H-index 임

1편 부터 n 편 까지 최대값을 구하면 되는 문제

1 -> 4
1 -> 1

 */