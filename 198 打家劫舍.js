/**
 * @param {number[]} nums
 * @return {number}
 */

//  动态规划思想 记住所有的值都是目前为止可能的最大收益值 而非数组里面值的本身！
var rob = function (nums) {
    // prev为现在求值的前前一个的最大值
    let prev = 0,
        // curr为现在求值的前一个的最大值
        curr = 0

    for (let e of nums) {
        // 因为现在求值的前一个值 在下一轮会为前前值的最大值 所以保存起来
        let temp = curr
        // 当前求的最大收益值 为当前值加上前前值 与 前值 的最大值 
        curr = Math.max(prev + e, temp)
        prev = temp
    }
    return curr
};

console.log(rob([1, 2, 3, 1]))