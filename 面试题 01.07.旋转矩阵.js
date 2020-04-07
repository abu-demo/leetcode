/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let N = matrix.length
    let X = Math.floor(matrix.length / 2)
    let Y = Math.ceil(matrix.length / 2)

    for (let x = 0; x < X; x++) {
        for (let y = 0; y < Y; y++) {
            console.log(matrix[x][y])
            let temp = matrix[x][y]
            matrix[x][y] = matrix[N - y - 1][x]
            matrix[N - y - 1][x] = matrix[N - x - 1][N - y - 1]
            matrix[N - x - 1][N - y - 1] = matrix[y][N - x - 1]
            matrix[y][N - x - 1] = temp
        }
    }
    return matrix
};

console.log(rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]));