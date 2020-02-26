/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 保存记录数的数组 size 26
    let count = new Array(26);

    // 获取保存结果的字典map
    let map = new Map();

    // 根据ascii码 记录一个字符串中 每个字符出现了多少次
    for (e of strs) { //字符串
        // key数组0填充
        count.fill(0);

        for (let i = 0; i < e.length; i++) { //字母 计数
            let index = e.charCodeAt(i) - 97;
            count[index] += 1;
        }
        // 生成key
        let key = count.join("");

        if (map.has(key)) {
            // 查找map 如果有 则添加当前判断的数组
            let r = map.get(key);
            r.push(e)
            map.set(key, r)
        } else {
            // 查找map 如果没有 则添加为新的key值
            map.set(key, [e])
        }
    }
    // 生成结果数组
    let res = []
    map.forEach((value) => res.push(value))

    return res
};

console.log(groupAnagrams([]))