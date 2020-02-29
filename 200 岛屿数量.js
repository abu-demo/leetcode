/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    console.log(grid)
    let island = 0;

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            console.log(grid[x][y])
            // 把当前岛屿都变成零
            if (grid[x][y] == 1) {
                island++
                dfs(x, y)
            }
        }
    }

    function dfs(x, y) {
        // 如果越界 或者为0 就不继续了
        if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1 || grid[x][y] == 0) {
            return
        } else if (grid[x][y] == 1) {
            // 是1的话 就继续扩展
            grid[x][y] = 0

            dfs(x - 1, y)
            dfs(x, y + 1)
            dfs(x + 1, y)
            dfs(x, y - 1)
            return
        }
    }

    return island
};

console.log(
    numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '1', '0']
    ])
)