function solution(people, limit) {

    let start = 0;
    let end = people.length - 1;
    let ans = 0;

    people.sort((a,b) => a - b);

    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            ans++;
            start++;
            end--;
        } else {
            end--;
            ans++;
        }
    }

    return ans;

}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

    이 문제는 멍청하게 보트를 최소값을 구하는 방법을 뒤늦게 생각함

 */