function solution(heights) {
    const ans = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        const target = heights[i];

        let flag = true;
        for (let j = i-1; j >= 0; j--) {
            if (heights[j] > target) {
                ans.unshift(j+1);
                flag = false;
                break;
            }
        }

        if (flag) {
            ans.unshift(0);
        }
    }

    return ans;

}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42588?language=javascript
 */