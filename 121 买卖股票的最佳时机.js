/**
 * @param {number} n
 * @return {number}
 */
// 找到数组最小值 以及最小值右边的最大值 如果小于等于最小值 则无
var maxProfit = function (prices) {
    // 为空 为1 返回利润0
    if (prices.length <= 1) return 0;

    let min, max, res = 0;
    min = max = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let e = prices[i];
        if (e < min) {
            // 和上一组可买卖收益相比较 留最大值
            res = Math.max(res, max - min);
            max = min = e;
        }
        if (e > max) {
            max = e;
        }
    }
    // 到循环结束的这一组和之前最大res的对比
    res = Math.max(res, max - min);

    // 最大值小于等于最小值 说明并不存在交易条件 返回0 存在 则返回下标index+1 变成天数
    return res;
};

console.log(maxProfit([1, 2]));