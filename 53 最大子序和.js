/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i - 1] + nums[i]); //求当前位置最大和
        sum = Math.max(sum, nums[i]); //记录最大值
    }
    return sum;
};

console.log(maxSubArray(
    [1]
))