/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let sum = 0
    let square = 2

    function count(node) {
        if (node.next == null) {
            return node.val //最后一个值乘以2的零次方
        }

        let res = count(node.next) + (node.val) * square //squre从2的1次方开始
        square *= 2 //当前值计算完 下一个次数加1
        return res
    }

    return count(head)
};