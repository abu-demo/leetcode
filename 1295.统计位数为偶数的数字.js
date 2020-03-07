/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0
    for (e of nums) {
        e = e + ''
        e.length % 2 == 0 ? count++ : ''
    }
    return count
};