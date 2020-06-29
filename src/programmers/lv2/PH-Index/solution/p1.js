function solution(citations) {
    citations.sort((a, b) => a - b);
    let ans = 0;
    console.log(citations);

    for (let i = 0; i < citations.length; i++) {
         const target = citations[i];
         const right = citations.length - i;

        if (target >= right) {
            ans = right;
            break;
        }
    }

    return ans;
}

export default solution;
/*
    https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

   n 편 중 h 이상 인용 -> h 편 이상 나머지 논문은 h번 이하 인용되었으면
   h의 최대값이 이 과학자의 H-index 임

    0 1 3 5 6

    맨 뒤부터 선택 그리고 그 위치부터 좌우로 해당 값보다 적은지 큰지 비교
    6이 선택되면 6기준으로 왼쪽이 6개 이하 오른쪽이 6이상인거 체크
 */
