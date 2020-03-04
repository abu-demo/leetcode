/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let count = 0, //好橘子数量
        queue = [], //队列
        time = 0 //最大时间

    R = grid.length
    C = grid[0].length

    for (let i = 0; i < R; i++) { //行
        for (let j = 0; j < C; j++) { //列
            if (grid[i][j] == 1) {
                count++ //记录好橘子的数量

            } else if (grid[i][j] == 2) {
                queue.unshift([i, j, 0]) //坏橘子放进感染源列表
            }
        }
    }

    while (queue.length != 0) { //队列不为空
        let bad = queue.pop() //拿出一个坏橘子 看能感染到好橘子不

        let x = bad[0], //行
            y = bad[1], //列
            dep = bad[2] //腐烂时间

        time = Math.max(time, dep) //记录最大的时间

        infect(x - 1, y, dep) //上
        infect(x, y + 1, dep) //右
        infect(x + 1, y, dep) //下
        infect(x, y - 1, dep) //左
    }

    function infect(x, y, dep) {
        if (x >= 0 && y >= 0 && x < R && y < C) { //判断越界
            if (grid[x][y] == 1) { //如果是好橘子 
                grid[x][y] = 2 //感染为坏橘子
                count-- //好橘子数量变少
                queue.unshift([x, y, dep + 1]) //添加到感染源队列
            }
        }
    }
    // 没有好橘子了 返回最大time  还有好橘子 说明感染失败
    return count == 0 ? time : -1
};
console.log(orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
]))