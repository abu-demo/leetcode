/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let r = new ListNode(-1);
    let head = r;
    while (l1 != null || l2 != null) {
        if (l1 == null && l2 != null) {
            write(0, l2.val);
            l2 = l2.next;
            continue;
        }
        if (l1 != null && l2 == null) {
            write(0, l1.val);
            l1 = l1.next;
            continue;
        }
        write(l1.val, l2.val);
        l1 = l1.next;
        l2 = l2.next;
    }

    function write(m, n) {
        let bit = m + n + carry;
        carry = 0; //进位清零
        if (bit > 9) {
            carry = 1; //进1位
            bit = bit - 10; //值
        }
        r.next = new ListNode(bit);
        r = r.next;
    }
    // 如果两个同时结束 有可能有进位的情况
    if (carry == 1) {
        write(0, 0);
    }
    return head.next
};