/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let res = new Array(k)
    // res[0] = nums[0]
    // for (let i = 1; i < nums.length; i++) {
    //     res.push(nums[i])
    //     res.sort()
    //     res.pop
    // }
    nums.sort(function (a, b) {
        return b - a
    })
    return nums
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))