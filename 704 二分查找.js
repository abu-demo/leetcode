var search = function (nums, target) {
    let res = -1,
        low = 0,
        high = nums.length - 1,
        mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2)

        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return res;
};

console.log(search([-1], -1))