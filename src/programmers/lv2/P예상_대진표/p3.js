function solution(n,a,b)
{

    // 1. 반을 나눈다.
    // 2. 반을 기준으로 a 와 b가 따로 따로 있는지 확인한다.
    // 2-1. a에 몰려있는지 b에 몰려있는지 본다.
    // 4.

    let round = 0;

    while (n !== 0) {
        const ban = Math.floor(n / 2);

        if (a <= ban && b > ban) {
            // 여기서 완전 다른 방향에 있으니
            // 서로 만날려면 반복작업
            round++;
            round += Math.log2(ban);
            return round;
        } else if (a <= ban && b <= ban) {
            n = Math.floor(n/2);
        } else if (a > ban && b > ban) {
            n = Math.floor(n/2);
            a -= n;
            b -= n;
        }
    }

    return answer;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12985

    이것도 시간초과가 뜨네..
 */