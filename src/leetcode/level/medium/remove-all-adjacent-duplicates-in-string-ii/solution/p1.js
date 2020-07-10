/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function(s, k) {

    const ans = [];

    for (let c of s) {
        if (ans.length && ans[ans.length - 1][0] === c) {
            ans[ans.length - 1][1]++;
            if (ans[ans.length-1][1] === k) {
                ans.pop();
            }
        } else {
            ans.push([c, 1]);
        }
    }

    let res = '';

    for (let [c, count] of ans) {
        res += c.repeat(count);
    }

    return res;
};

export default removeDuplicates;

/*
    https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

    1. pos 를 가지고 한칸씩 옮긴다.
    2. 그리고 범위만큼 가져온다.
    3. 범위가 다 같은지 체크한다.
    4. 같다면
    4-1. 같지 않다면, 저장한다. 한글자를 pos를 한칸 올린다.
 */