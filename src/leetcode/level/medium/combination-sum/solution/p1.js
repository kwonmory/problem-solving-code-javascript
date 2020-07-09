/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    let ans = [];

    go([], 0, 0);

    return [...new Set(ans.map(JSON.stringify))].map(JSON.parse);

    function go(currentJar, index, sum) {
        if (sum === target) {
            ans.push(currentJar);
            return;
        }

        if (sum > target || index >= candidates.length) {
            return;
        }

        go(currentJar, index + 1, sum);
        go([...currentJar, candidates[index]], index, sum + candidates[index]);
        go([...currentJar, candidates[index]], index + 1, sum + candidates[index]);
    }
};

export default combinationSum;

/*
    https://leetcode.com/problems/combination-sum/
 */