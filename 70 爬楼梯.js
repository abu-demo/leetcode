/**
 * @param {number} n
 * @return {number}
 */
// 爬楼梯 动态规划 第i阶的方法 为i-2上2阶 +i-1上1阶
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }
    let one = 1,
        two = 2,
        end = 0;
    for (let i = 2; i < n; i++) {
        end = one + two;
        one = two;
        two = end;
    }
    return end;
};

console.log(climbStairs(10));