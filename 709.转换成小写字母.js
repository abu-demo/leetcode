/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let res = '',
        code
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i)
        res += code < 91 && code > 64 ? String.fromCharCode(code + 32) : str.charAt(i)
    }
    return res
};