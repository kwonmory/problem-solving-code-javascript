/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {

    let sortArr = arr.sort();
    let set = new Set();

    let map = {};

    sortArr.forEach(v => {
        if (!map[v]) {
            map[v] = 0;
        }
        map[v] = map[v] + 1;
        set.add(v);
    });

    // 키값을 차레대로 올라가면서 1000까지니깐
    let count = 0;

    for (let i = 0; i < 1000; i++) {
        if (map[i] !== undefined && map[i + 1] !== undefined) {
            count += map[i];
        }
    }

    return count;
};

console.log(countElements([1, 2, 3]));
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]));
console.log(countElements([1,3,2,3,5,0]));