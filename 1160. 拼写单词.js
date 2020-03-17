
var countCharacters = function (words, chars) {
    let map = new Map()
    let sum = 0

    // 拆chars 放进map
    for (e of chars) {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1)
        }
    }
    console.log(map)
    // 遍历字典 
    let count = 0
    for (e of words) {
        let m = new Map(map)
        // 遍历每个单词的字符串
        for (i of e) {
            // 有这个字符 并且还有剩余
            if (m.has(i) && m.get(i) != 0) {
                count++
                m.set(i, m.get(i) - 1)
            }
        }
        // 整个单词都有
        if (count == e.length) {
            // 计入总长度
            sum += count
        }
        // 清匹配长度i
        count = 0
    }
    return sum
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], 'atach'))