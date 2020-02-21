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

var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-1);
    let prev = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 == null ? l2 : l1;
    return dummy.next;
};

// 做测试 
let l1 = linkList([1, 2, 3])
let l2 = linkList([1, 3, 4])
let res = mergeTwoLists(l1, l2);
while (res != null) {
    console.log(res.val);
    res = res.next;
}

// 根据数组生成链表
function linkList(nums) {
    let res = new ListNode(-1);
    let head = res;
    for (let n of nums) {
        res.next = new ListNode(n);
        res = res.next;
    }
    return head.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}