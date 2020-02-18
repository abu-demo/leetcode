/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    let res = [];
    // 遍历数组 nums[i]的值绝对值-1对应的数组下标的值改成负数
    for (e of nums) {
        let index = Math.abs(e) - 1;
        // 如果已经是负数了 就不用再改了
        if (nums[index] > 0) {
            nums[index] = 0 - nums[index]
        }
    }
    // 遍历数组 下标对应的值为负数 则i+1即为确实的数
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};

console.log(findDisappearedNumbers([1, 1]));