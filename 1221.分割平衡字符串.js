/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let res = 0,
        count = 0

    for (e of s) {
        if (e == 'R') {
            count++
        } else {
            count--
        }
        count == 0 ? res++ : ''
    }

    return res
};