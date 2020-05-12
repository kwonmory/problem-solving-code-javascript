function solution(arr1, arr2) {

    let ans = [];

    for (let a = 0; a < arr1.length; a++) {

        let tempArr = [];

        for (let b = 0; b < arr2[0].length; b++) {

            let calcData = 0;

            for (let aa = 0; aa < arr1[a].length; aa++) {
                 calcData += arr1[a][aa] * arr2[aa][b];
            }

            tempArr.push(calcData);
        }

        ans.push(tempArr);
        tempArr = [];
    }

    return ans;

}

module.exports = solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/12949



 */