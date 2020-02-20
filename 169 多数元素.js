/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let mode = 0;
    let count = 0;
    for (e of nums) {
        if (count == 0) {
            mode = e;
        }
        if (e == mode) {
            count++;
        } else {
            count--;
        }
    }
    return mode
};