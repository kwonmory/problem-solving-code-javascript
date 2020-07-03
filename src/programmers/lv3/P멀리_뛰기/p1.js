function solution(n) {

    return go(n) % 1234567;

    function go(target) {
        if (target === 0) {
            return 1;
        }

        if (target < 0) {
            return 0;
        }

        return go(target-1) + go(target-2);
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12914

    시간 초과가 나오네!
 */