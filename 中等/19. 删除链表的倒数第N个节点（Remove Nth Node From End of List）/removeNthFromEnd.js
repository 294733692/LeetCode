/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 快慢指针
let removeNthFromEnd = function (head, n) {
  let pre = new ListNode(0)
  pre.next = head
  let start = pre, end = pre
  while (n !== 0) {
    start = start.next
    n--
  }
  while (start.next !== null) {
    start = start.next
    end = end.next
  }
  end.next = end.next.next
  return pre.next
};

// 两次遍历
let removeNthFromEnd1 = function (head, n) {
  let pre = new ListNode(0)
  pre.next = head
  let first = head
  let len = 0
  // 记录链表长度
  while (first !== null) {
    len++
    first = first.next
  }

  // 记录二次遍历删除节点的循环次数
  len -= n
  first = pre
  while (len > 0) {
    first = first.next
    len--
  }
  first.next = first.next.next
  return pre.next
}

function ListNode (val) {
  this.val = val;
  this.next = null;
}

let obj = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }
}
console.log(removeNthFromEnd1(obj, 2));
