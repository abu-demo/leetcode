/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let ans = []
    let res = []

    for (let i = T.length - 1; i >= 0; i--) {
        res = res.filter((e) => T[e] > T[i])
        if (res.length == 0) {
            ans.unshift(0);
        } else {
            ans.unshift(res[0] - i);
        }
        res.unshift(i)
    }
    return ans
};

console.log(dailyTemperatures([]))