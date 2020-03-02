/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s //1 直接返回

    let x = 0, //行坐标
        i = 0, //字符串坐标
        col = -1, //控制反转
        res = new Array(numRows) //结果数组

    res.fill("")

    while (i < s.length) {
        col = (x == 0 || x == numRows - 1) ? -1 * col : col //行数为0或者最后 开始反转
        res[x] += s.charAt(i) //添加到本行结果
        x += col
        i++
    }
    return res.join("")
};

console.log(convert("LEETCODEISHIRING", 1))