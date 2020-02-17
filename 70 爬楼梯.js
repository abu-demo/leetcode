/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }
    let one = 1,
        two = 2,
        end = 0;
    for (let i = 2; i < n; i++) {
        end = one + two;
        one = two;
        two = end;
    }
    return end;
};

console.log(climbStairs(4));