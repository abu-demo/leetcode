/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let res = new Array(num_people),
        count = 0,
        i = 0

    res.fill(0)
    while (candies != 0) {
        count = Math.min(i + 1, candies)
        candies -= count
        res[i % num_people] += count
        i++
    }

    return res
};

console.log(distributeCandies(7, 4))