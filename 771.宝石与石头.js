/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let set = new Set(J.split('')) //spilt必须有参数
    let count = 0
    for (let i = 0; i < S.length; i++) {
        set.has(S.charAt(i)) ? count++ : ''
    }
    return count
};