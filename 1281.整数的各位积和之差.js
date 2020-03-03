/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let mul = 1,
        pls = 0

    while (n > 1) {
        let z = n % 10
        n = (n - z) / 10

        mul *= z
        pls += z
    }

    return mul - pls
};

console.log(subtractProductAndSum(234))