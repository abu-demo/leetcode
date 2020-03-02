/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null,
        cur = head
    while (cur != null) {
        let next = cur.next //保存
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};