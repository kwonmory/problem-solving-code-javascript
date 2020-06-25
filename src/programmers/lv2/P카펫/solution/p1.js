function solution(brown, yellow) {

    const sum = brown + yellow;

    for (let height = 3; height <= sum / 2; height++) {
        for (let width = height; width <= sum / 2; width++) {

            const maybeBrown = width * 2 + (height - 2) * 2;
            const maybeYellow = sum - maybeBrown;

            if (maybeYellow / (height - 2) > width) continue;

            if (maybeBrown !== brown || maybeYellow !== yellow) continue;

            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
    항상 맨윗 부분과 맨 아랫부분은 꽉차있을 테고
    그 외 줄은 각 줄마다 2개의 브라운을 차지하고 있는 상황

 */