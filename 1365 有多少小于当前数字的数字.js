/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let res = [...nums] //保存当前数组

    nums.sort((a, b) => a - b) //排序

    let prev = 0

    let map = new Map() //映射
    map.set(nums[0], 0) //最小值 有0个比它小

    for (let i = 1; i < nums.length; i++) { //判断有多少小
        if (nums[i] == nums[i - 1]) {
            map.set(nums[i], prev) //和上一个相同 就和上一个相等
        } else {
            map.set(nums[i], i) //比上一个大 就为当前下标 
            prev = i //更新prev
        }
    }

    for (let i = 0; i < res.length; i++) { //遍历数组找映射
        res[i] = map.get(res[i])
    }

    return res
};

console.log(smallerNumbersThanCurrent([8, 8, 8, 8, 8]))