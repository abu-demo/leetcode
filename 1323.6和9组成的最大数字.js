/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    return parseInt((num + '').replace(6, 9)) //替换首个匹配的值
};