/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
    const jar = [];

    matrix.forEach((v, i) => {
        v.forEach((s, i2) => {
            if (s === 0) {
                jar.push([i, i2]);
            }
        });
    });

    jar.forEach(v => {
        const [i, j] = v;

        for (let m = 0; m < matrix[i].length; m++) {
            matrix[i][m] = 0;
        }
        for (let k = 0; k < matrix.length; k++) {
            matrix[k][j] = 0;
        }
    });

    return matrix;
};

export default setZeroes;

/*
    https://leetcode.com/problems/set-matrix-zeroes/

 */