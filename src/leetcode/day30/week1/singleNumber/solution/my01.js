/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    let store = 0;

    nums.forEach(v => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });

    for (let [key, value] of map) {
        if (value == 1) {
            store = key;
        }
    }

    return store;
};