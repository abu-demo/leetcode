/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    arr = arr.sort((a, b) => a - b)
    return arr.splice(0, k)
};