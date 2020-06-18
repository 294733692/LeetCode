/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
let swapPairs = function (head) {
  if (head === null || head.next === null) return head
  let pre = {}

  pre = head.next
  head.next = swapPairs(pre.next)
  pre.next = head
  return pre
};

// 非递归
let swapPairs1 = function (head) {
  let pre = new ListNode(0)
  pre.next = head
  let temp = pre

  while (temp.next !== null && temp.next.next !== null) {
    let start = temp.next  // 1234 => 1234
    let end = temp.next.next // end = 234
    temp.next = end // temp.next = 234 => 0234
    start.next = end.next //  start.next = 34 => start = 034
    end.next = start // end.next = 034 => end  = 2034
    temp = start // temp = 034
  }
  return pre.next
}

function ListNode (val) {
  this.val = val;
  this.next = null;
}

let tree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}
console.log(swapPairs1(tree));
