function solution(arr)
{
    const ans = [];

    arr.reduce((acc, v) => {
        if (acc !== v) {
            ans.push(v);
        }
        return v;
    }, -1)

    return ans;
}

export {solution};
/*
    https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 */
