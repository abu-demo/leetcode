/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let L = 0; //左指针
    let R = height.length; //右指针
    let maxArea = 0;

    while (L != R) {
        // 小的像中间移动 因为 小的柱子随着宽度减少面积不会再变大
        if (height[L] <= height[R]) {
            area = height[L] * (R - L);
            L++;
        } else {
            area = height[R] * (R - L);
            R--;
        }
        maxArea = maxArea < area ? area : maxArea;
    }

    return maxArea;
};

console.log(maxArea([1, 2, 3, 3, 6]));