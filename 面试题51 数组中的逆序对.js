/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let sum = 0;
    mergeSort(nums);

    function mergeSort(items) {
        if (items.length <= 1) { //全部切割成1单位 返回
            return items;
        }
        var middle = Math.floor(items.length / 2), //求中间值
            left = items.slice(0, middle), //截取left right
            right = items.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) { //合并两个数组
        var result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                sum += left.length; //后弹出计数
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
    return sum;
};

console.log(reversePairs([]))