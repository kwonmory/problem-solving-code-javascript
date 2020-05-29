function solution(heights) {
    return heights.map((v, i) => {

        while (i) {
            i--;
            if (heights[i] > v) {
                return i+1;
            }
        }

        return 0;
    });
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42588?language=javascript
 */