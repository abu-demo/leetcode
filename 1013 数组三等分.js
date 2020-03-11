/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let sum = 0
    for (e of A) {
        sum += e
    }
    console.log(sum)
    if (sum % 3 != 0) return false //不能被3整除不是 因为整数相加得不到小数

    let left_sum = 0,
        right_sum = 0,
        left = false,
        right = false,
        sta = sum / 3

    for (let i = 0, j = A.length - 1; i + 1 < j;) {
        if (left_sum + A[i] == sta) {
            left = true
        } else {
            left_sum += A[i++] //左边的和
        }
        if (right_sum + A[j] == sta) {
            right = true
        } else {
            right_sum += A[j--] //右边的和
        }
        if (left && right) return true
    }
    return false //有 可以被三整除 但是不能平分的情况
};

console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]))