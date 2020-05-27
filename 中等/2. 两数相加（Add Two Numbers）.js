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
let addTwoNumbers = function (l1, l2) {
  // 保存上一一次操作的值
  let pre = new ListNode(0)
  // 当前值，操作当前值，pre的值也会发生改变
  let cur = pre
  let carry = 0 // 进位

  while (l1 || l2) {
    let x = l1 === null ? 0 : l1.val
    let y = l2 === null ? 0 : l2.val
    let sum = x + y + carry

    // 计算进位
    carry = parseInt(sum / 10)
    // 计算同位结果
    sum = sum % 10

    // 先生成下一个val值
    cur.next = new ListNode(sum)
    // 将cur的next赋值给cur，更新cur的值
    cur = cur.next
    // 更新l1和l2的值
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next

    if (carry == 1) cur.next = new ListNode(carry)
  }
  return pre.next
};

function ListNode (val) {
  this.val = val;
  this.next = null;
}

let ListNode1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}
let ListNode2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(addTwoNumbers(ListNode1, ListNode2));
