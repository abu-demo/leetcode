/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let start = 1,
        end = 2,
        sum = 3,
        res = []
    while (end < target) {
        if (target > sum) {
            end++
            sum += end
        } else if (target < sum) {
            sum -= start
            start++
        } else if (target == sum) {
            let s_res = []
            for (let i = start; i <= end; i++) {
                s_res.push(i)
            }
            res.push(s_res)
            end++
            sum += end
        }
    }

    return res
};