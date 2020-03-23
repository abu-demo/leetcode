
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let max_level = 0
    loop(root, 1)
    function loop(node, level) {
        max_level = Math.max(max_level, level)
        if (node.left) {
            loop(node.left, level + 1)
        }
        if (node.right) {
            loop(node.right, level + 1)
        }
    }
    return max_level
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]))