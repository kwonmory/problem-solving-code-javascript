/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
let backspaceCompare = function (S, T) {

    let competeS = [];
    let competeT = [];

    for (let i = 0; i < Math.max(S.length, T.length); i++) {

        if (i < S.length) {
            if (S.charAt(i) == "#") {
                if (competeS.length != 0)
                    competeS.pop(); // 전에 있던거 빼면 되고,
            } else {
                competeS.push(S.charAt(i));
            }
        }

        if (i < T.length) {
            if (T.charAt(i) == "#") {
                if (competeT.length != 0)
                    competeT.pop(); // 전에 있던거 빼면 되고,
            } else {
                competeT.push(T.charAt(i));
            }
        }
    }

    return competeS.join("") === competeT.join("");
};

console.log(backspaceCompare("ab#c", "ad#c"));
// 간단하게 S 와 T 중에 큰거 기준으로 for 문 돌려서 하면 되지 않나..