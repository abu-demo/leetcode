/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [
            []
        ],
        next_num = [],
        r = []

    loop([], -2 ^ 23, nums)

    function loop(prev, last_val, num) {
        for (let i = 0; i < num.length; i++) { //循环数组
            if (num[i] >= last_val) { //取比上一次选值大的值 可以去重
                r = [...prev, num[i]]
                res.push(r) //子数组

                next_num = [...num] //复制数组 一定要这样做 不然就会连带num一起更改 踩坑第二次！！！
                next_num.splice(i, 1) //删除当前值

                loop(r, num[i], next_num) //循环
            }
        }
    }

    return res
};



console.log(subsets([1, 2, 3]))