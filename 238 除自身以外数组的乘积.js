/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = []
    let R = 1;
    // 左数组
    for (e of nums) {
        R = R * e;
        res.push(R)
    }
    console.log(res)

    R = 1;

    // 从右开始
    for (let i = nums.length - 1; i > 0; i--) {
        let cur = nums[i]
        res[i] = res[i - 1] * R
        R = R * cur //保存R
    }
    res[0] = R //0下标位

    return res
};

console.log(productExceptSelf([1]))