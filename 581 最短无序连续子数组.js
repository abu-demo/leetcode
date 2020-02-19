var findUnsortedSubarray = function (nums) {
    let min,
        max,
        flag = false;

    // 遍历 找到非升序后最小值
    for (let i = 1; i < nums.length; i++) {
        if (!flag && nums[i] < nums[i - 1]) {
            flag = true;
            // min为升序最大值
            min = nums[i - 1]
        }
        // 之后的每个元素都对比找最小值
        if (flag) {
            min = Math.min(min, nums[i])
        }
    }
    // flag 没有变化 说明整个数组都是升序的
    if (!flag) return 0;
    console.log("min - " + min)

    flag = false;
    // 遍历 找到非降序后最大值 之前判断过不是升序数组 所以这次不再判断
    for (let i = nums.length - 1; i > 0; i--) {
        if (!flag && nums[i - 1] > nums[i]) {
            flag = true;
            max = nums[i]
        }
        // 之后的每个数组都对比取最大值
        if (flag) {
            max = Math.max(max, nums[i - 1])
        }
    }
    console.log("max - " + max)

    let sta = -1;
    let end = -1;

    // 遍历 找到 最小值 和 最大值 本该的位置
    for (let i = 0; i < nums.length; i++) {
        if (sta < 0 && nums[i] > min) {
            sta = i;
        }
        if (end < 0 && nums[nums.length - 1 - i] < max) {
            end = nums.length - i - 1;
        }
        // 省去子数组的循环部分
        if (sta > 0 && end > 0) {
            break;
        }
    }
    console.log(sta + "--" + end)
    return end - sta + 1
}
console.log(findUnsortedSubarray([5, 4, 3, 2, 1]))