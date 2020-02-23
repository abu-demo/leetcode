/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []

    loop(nums, [])

    function loop(nums, path) {
        for (let i = 0; i < nums.length; i++) { //遍历数组
            e = nums[i];
            if (nums.length > 1) { //剩下的数组的值不为1 继续
                let arr = [...nums]; //这里踩坑了 arr=nums的话 arr改动nums也会相对改动
                arr.splice(i, 1)
                loop(arr, [...path, e])
            } else { //为1
                res.push([...path, e])
            }
        }
    }
    return res;
};

console.log(permute([1]));