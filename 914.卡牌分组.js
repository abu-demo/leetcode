/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let map = new Map()
    for (e of deck) {
        map.has(e) ? map.set(e, map.get(e) + 1) : map.set(e, 1)
    }
    console.log(map)

    let prev = null

    for (e of map) {
        prev = e[1]
        break
    }
    console.log(prev)

    for (e of map) {
        prev = gcd(prev, e[1])
        console.log(prev)
    }

    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b)
    }

    return prev > 1
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))