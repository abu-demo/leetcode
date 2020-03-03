/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let distance = 0; //记录能到达的最远距离

    for (let i = 0; i < nums.length; i++) {
        if (i > distance) { //下标到了 distance达不到的位置
            return false
        }
        distance = Math.max(distance, i + nums[i]) //更新最远距离
    }

    return true
};

console.log(canJump([3, 2, 1, 0, 4]))