/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    let index = A.length - 1

    while (m > 0 && n > 0) { //逆序 最大值放A后
        if (A[m - 1] > B[n - 1]) {
            A[index] = A[m - 1];
            m--
        } else {
            A[index] = B.pop()
            n--
        }
        index--
    }

    while (B.length != 0) { //还剩B
        A[index] = B.pop()
        index--
    }

    return A
};

console.log(merge([2, 2, 3, 0, 0, 0], 3, [1, 5, 6], 3))