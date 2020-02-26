/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = 0;
    for (e of nums) {
        res ^= e;
    }
    return res;
};

console.log(singleNumber([4, 1, 2, 1, 2]))