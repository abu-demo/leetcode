/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let n = s.length();
    if (n == 0) {
        return "^$";
    }
    let ret = "^";
    for (let i = 0; i < n; i++)
        ret += "#" + s.charAt(i);
    ret += "#$";
    return ret;
}

// 马拉车算法
function longestPalindrome2(s) {
    let T = preProcess(s),
        n = T.length(),
        P = new Array[n],
        C = 0,
        R = 0;
    for (let i = 1; i < n - 1; i++) {
        let i_mirror = 2 * C - i;
        if (R > i) {
            P[i] = Math.min(R - i, P[i_mirror]); // 防止超出 R
        } else {
            P[i] = 0; // 等于 R 的情况
        }

        // 碰到之前讲的三种情况时候，需要利用中心扩展法
        while (T.charAt(i + 1 + P[i]) == T.charAt(i - 1 - P[i])) {
            P[i]++;
        }

        // 判断是否需要更新 R
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }

    }

    // 找出 P 的最大值
    let maxLen = 0,
        centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }
    let start = (centerIndex - maxLen) / 2; //最开始讲的求原字符串下标
    return s.substring(start, start + maxLen);

};