/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let target = [], i = 0
    while (i < index.length) {
        target.splice(index[i], 0, nums[i])
        i++
    }
    return target
};