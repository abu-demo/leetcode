/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0;
    let prev = getValue(s.charAt(0)),
        cur;
    for (let i = 1; i < s.length; i++) {
        cur = getValue(s.charAt(i));
        // 当前位和下一位比 小 就减 大于等于就加当前位
        if (prev < cur) {
            sum -= prev;
        } else {
            sum += prev;
        }
        console.log(sum);
        prev = cur;
    }
    sum += prev;

    return sum;

    function getValue(e) {
        // 字典
        switch (e) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
};

console.log(romanToInt("IV"))