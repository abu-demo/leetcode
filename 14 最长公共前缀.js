/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return '' //数组不为空

    let str = strs[0]

    for (e of strs) {
        if (str.length == 0) return '' //str为空 后面的不用继续循环了

        if (e.length < str.length) {
            str = str.slice(0, e.length) //str比当前元素长 就截取str为当前长度 
        }

        for (let i = 0; i < str.length; i++) {
            if (e.charAt(i) != str.charAt(i)) { //发现不同字符
                str = str.slice(0, i) //截取不同位置之前的字符
                break; //退出本次循环
            }
        }

    }

    return str
};


console.log(longestCommonPrefix(["dog", "racecar", "car"]))