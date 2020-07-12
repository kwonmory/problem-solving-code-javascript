/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
    let ans = 0;
    const map = new Map();

    nums.forEach(v => {
        if (map.has(v)) map.set(v, map.get(v) + 1);
        else map.set(v, 1);
    });

    const filteredMap = [...map].filter(([_, value]) => value > 1);

    filteredMap.forEach(([_,b]) => {
        console.log(b, ans);
        ans += calc(b);
    });
    
    return ans;
};

const calc = (num) => {
    let ans = 0;

    for(let i = num - 1; i > 0; i--) ans += i;

    return ans;
}

export default numIdenticalPairs;

/*
    https://leetcode.com/problems/number-of-good-pairs/
 */