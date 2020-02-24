function merge(left, right) { //合并两个数组
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            sum += left.length;
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

function mergeSort(items) {
    if (items.length == 1) { //全部切割成1单位 返回
        return items;
    }
    var middle = Math.floor(items.length / 2), //求中间值
        left = items.slice(0, middle), //截取left right
        right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

let sum = 0;

console.log(mergeSort([7, 5, 6, 4]) + sum);