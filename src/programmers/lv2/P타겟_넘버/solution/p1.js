function solution(numbers, target) {
    return go(0, 0);

    function go(acc, index) {
        if (index === numbers.length) {
            if (acc === target) return 1;
            else return 0;
        }

        return go(acc + numbers[index], index + 1)
            + go(acc - numbers[index], index + 1);
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 */