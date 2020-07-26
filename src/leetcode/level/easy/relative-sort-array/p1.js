/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
    const ans = [];
    const map = new Map();

    arr1.forEach(v => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });

    arr2.forEach(v => {
        if (map.has(v)) {
            for (let i = 0; i < map.get(v); i++) {
                ans.push(v);
            }
            map.delete(v);
        }
    });

    const ans2 = [];

    for (let [target, count] of map) {
        for (let i = 0; i < count; i++) {
            ans2.push(target);
        }
    }
    ans2.sort((a,b) => a-b);

    return [...ans, ...ans2];
};

export default relativeSortArray;

/*
    https://leetcode.com/problems/relative-sort-array/

        var relativeSortArray = function(arr1, arr2) {
        const countMapping = {};
        const solArr = [];
        const restArr = [];

        for (const val of arr2) {
            countMapping[val] = 0;
        }

        for (const val of arr1) {
            if (countMapping[val] >= 0) {
                countMapping[val]++;
            } else {
                restArr.push(val);
            }
        }

        for (const val of arr2) {
            for (let i = 0; i < countMapping[val]; i++) {
                solArr.push(val)
            }
        }

        return [...solArr, ...restArr.sort((a, b) => a > b ? 1 : -1)];
    };
 */