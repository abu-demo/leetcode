var isValid = function (s) {
    // 偶数排除
    if (s.length % 2 != 0) return false
    // 0排除
    if (s.length == 0) return false
    // 数据对应
    let map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');
    // 栈 并初始化第一位
    let stack = [s.charAt(0)];
    // 遍历
    for (let i = 1; i < s.length; i++) {
        // 匹配 出栈
        if (map.get(s.charAt(i)) != stack[0] || stack.length == 0) {
            stack.unshift(s.charAt(i));
        } else {
            // 不匹配 入栈
            stack.shift();
        }
    }
    // 为空 则有效
    return stack.length == 0 ? true : false;
};

// 测试用例部分
let s = ""
let res = isValid(s);
console.log(res);