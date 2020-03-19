/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map()

    // 计数
    for (e of s) {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1)
        }
    }

    let has_odd = false,
        count = 0
    for (e of map.values()) {
        if (e % 2 != 0) {
            // 奇数 -1的长度可以用作合成
            has_odd = true
            count += e - 1
        } else {
            // 偶数 都可以用来合成
            count += e
        }
    }
    // 如果有奇数 则可以选择一个奇数作为中间 所以长度可以加1
    return has_odd ? count + 1 : count
};

console.log(longestPalindrome("abbd"))