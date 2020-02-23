/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // 取小于等于target的数 因为大于的话不可能得到target 但题目好像不给这种无效数据 所以先省略
    // let can = candidates.filter((e) => e <= target)

    let res = []; //结果数组

    loop(0, target, []) //开始循环

    function loop(prev_val, prev_res, prev_path) {
        for (let e of candidates) {
            // 大于上一个节点 =>结果不重复（剪枝） 不大于上一个结果 => 不会满足条件
            if (e >= prev_val && e <= prev_res) {
                if (prev_res - e != 0) {
                    loop(e, prev_res - e, [...prev_path, e]);
                } else {
                    res.push([...prev_path, e]);
                }
            }
        }
    }

    return res
};

console.log(combinationSum([2, 3, 5], 8));