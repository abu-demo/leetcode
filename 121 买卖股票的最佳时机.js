/**
 * @param {number} n
 * @return {number}
 */

var maxProfit = function (prices) {
    // 为空 为1 返回利润0
    if (prices.length == 0) return 0;

    let min = prices[0],
        res = 0;

    for (let i = 1; i < prices.length; i++) {
        let e = prices[i];
        // 更新最小值
        if (e < min) {
            min = e;
        } else if (e - min > res) { //每次有值都判断是否大于目前所能计算出的最大收益
            res = e - min;
        }
    }
    return res;
};

console.log(maxProfit([1, 2]));