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
let reverseList = function (head) {
  if (!head) return null
  let prev = null
  let curr = head
  while (curr) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }
  return prev
};
let reverseList1 = function (head) {
  // 递归终止条件
  if (!head || !head.next) return head
  // 这里curr记录head最后一个节点
  let curr = reverseList(head.next)
  //如果链表是 1->2->3->4->5，那么此时的cur就是5
  //而head是4，head的下一个是5，下下一个是空
  //所以head.next.next 就是5->4
  head.next.next = head
  // 阻断链表循环，将head.next置为空
  head.next = null
  return curr
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let obj = {
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
console.log(reverseList(obj));
