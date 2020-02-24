/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let row_l = grid.length,
        col_l = grid[0].length;

    for (let i = 1; i < col_l; i++) { //第一行
        grid[0][i] += grid[0][i - 1];
    }
    for (let i = 1; i < row_l; i++) { //第一列
        grid[i][0] += grid[i - 1][0];
    }

    for (let row = 1; row < row_l; row++) {
        for (let col = 1; col < col_l; col++) {
            up = grid[row - 1][col]; //上面路径最小和
            left = grid[row][col - 1]; //左面路径最小和
            grid[row][col] = (up > left ? left : up) + grid[row][col]; //当前路径最小和
        }
    }
    return grid[row_l - 1][col_l - 1]; //右下角权值
};

console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]))