/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i += 2) { //步长为2
        let j = nums[i]
        while (j > 0) { //频次为 i
            res.push(nums[i + 1]) //i+1的值
            j--
        }
    }
    return res
};

console.log(decompressRLElist([1, 2]))