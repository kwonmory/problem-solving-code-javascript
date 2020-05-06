/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map();

    strs.forEach(v => {
        let str = [...v].sort().join("");

        if (map.has(str)) {
            map.set(str, map.get(str).concat([v]));
        } else {
            map.set(str, [v]);
        }
    });

    let result = [];

    for (let [key, value] of map) {
        result.push(value);
    }

    return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]));

// 각 소문자를 숫자로 변환해서 더한값을 가지고 하는게 좋을까
// 정렬해서 하는게 좋을까

// 전자로 해보자. => 해보니 여러개의 값을 더하기 하면, 중복되는 문제가 있었다.
// 그래서 후자로 해보자.

// 후자로는 성공