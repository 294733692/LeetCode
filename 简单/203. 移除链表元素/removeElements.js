/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let removeElements = function (head, val) {
  // 哨兵节点
  let sentinel = new ListNode(0)
  sentinel.next = head
  // 上一个节点
  let preHead = sentinel
  // 当前节点
  let curr = head
  while (curr !== null) {
    // 如果相等，将下一个节点赋值给前继节点（相当于删除了当前节点）
    if (curr.val === val) {
      preHead.next = curr.next
    } else {
      // 如果不相等，当前节点赋值给前继节点
      preHead = curr
    }
    // 跟换为下一位节点
    curr = curr.next
  }
  return sentinel.next
};

let obj = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 6,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null
            }
          }
        }
      }
    }
  }
}
console.log(removeElements(obj, 6));
