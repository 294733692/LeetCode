/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};

let l1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
}
deleteDuplicates(l1)
