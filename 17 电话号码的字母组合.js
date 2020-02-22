/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let result = [];
    loop(0, "");

    function loop(index, prev) {
        str = getValue(digits.charAt(index++)); //获取当前层的字符串

        for (let e of str) { //循环字符串
            if (index != digits.length) { //当前行 不为最后一行
                loop(index, prev + e); //去下一层 前缀加上本轮的循环值
            } else {
                result.push(prev + e); //当前层为最后一层 添加到结果数组中
            }
        }
    }

    return result;

    function getValue(num) {
        let res = "";
        switch (num) {
            case "2":
                res = "abc";
                break;
            case "3":
                res = "def";
                break;
            case "4":
                res = "ghi";
                break;
            case "5":
                res = "jkl";
                break;
            case "6":
                res = "mno";
                break;
            case "7":
                res = "pqrs";
                break;
            case "8":
                res = "tuv";
                break;
            case "9":
                res = "wxyz";
                break;
        }

        return res;
    }
};

console.log(letterCombinations("92"));