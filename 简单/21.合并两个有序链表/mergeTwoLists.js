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
// var mergeTwoLists = function (l1, l2) {
//   // 处理特殊情况，递归出口
//   // 递归到最后，如果两个链表都为空，返回结果
//   if (!l1) return l2
//   if (!l2) return l1
//   // 如果l1链表的val小于l2链表的val，将在l1链表进行排序
//   // 否则在l2链表进行排序
//   if (l1.val < l2.val) {
//     // 递归调用，l1链表进行排序，传入l2.next链表，继续和l2链表进行排序
//     l1.next = mergeTwoLists(l1.next, l2)
//     return l1
//   } else {
//     // 同上
//     l2.next = mergeTwoLists(l1, l2.next)
//     return l2
//   }
// };

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
var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1)
  // 浅拷贝，cur的值会修改preHead的值
  let cur = preHead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // 将l1赋值给cur.next链表节点
      // l1剩下的链表赋值给自身（相当于删除循环前的链表值）
      cur.next = l1
      l1 = l1.next
    } else {
      // 同上
      cur.next = l2
      l2 = l2.next
    }
    // 删除当前循环的链表值
    cur = cur.next
  }
  // 循环完毕，返回不为空的链表结构
  cur.next = l1 || l2
  // 返回排序后的链表，这里用返回preHead.next
  // 返回preHead会把-1的链表给一起返回出来
  return preHead.next
}
let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null
    }
  }
}
console.log(mergeTwoLists(l1, l2));
