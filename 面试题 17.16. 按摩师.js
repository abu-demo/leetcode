/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
    let prev = 0,
        prev_prev = 0

    for (e of nums) {
        e = Math.max(prev, prev_prev + e)
        prev_prev = prev
        prev = e
    }
    return prev
};