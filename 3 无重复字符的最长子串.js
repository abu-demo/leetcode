/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function (s) {
    let i = 0,
        j = 0,
        max = 0;

    let map = new Map();

    while (j < s.length) { //还没到最后一位
        console.log(map)
        if (map.has(s.charAt(j))) { //如果有重复值 则需要更改i为前一个重复值的后一位k的位置
            //但是因为i是跳到k位的 k之前的元素在map中并没有删除掉 所以可能是和k之前并且没有删除的元素重复 so 取i最大值（如果是和无效的值重复 最大不会超过i）
            i = Math.max(map.get(s.charAt(j)) + 1, i);
        }
        map.set(s.charAt(j), j) //无论i变不变 j都要添加进数组的 如果key重复会替换掉原来的value(顶替掉无效的字符)
        max = Math.max(max, j - i + 1) //每次都判断 不会忽略最长子串在最后的情况
        j++
        console.log(max)
    }
    return max
};

console.log(lengthOfLongestSubstring("vvv"))