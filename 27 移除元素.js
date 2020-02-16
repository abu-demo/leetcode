/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    let l = nums.length;
    if (l == 0) return 0;
    let start = 0;
    let end = nums.length - 1;

    for (; start < end; start++) {
        while (nums[start] == val && start < end) {
            nums[start] = nums[end];
            end--;
        }
        if (start == end) break;
    }

    return nums[start] == val ? start : start + 1;
};