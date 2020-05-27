给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

leetCode题目地址：[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

解法1：

​	基本解法就是同位的数字相加，如果`l1和l2`不相等，那么给位数少的补位即可。如果大于`10`有生成一个进位，

并将进位和下一次的运算一起进行，并把计算结果添加到新的链表中去，并更新`cur`和`l1`、`l2`，并返回`pre.next`，注意这里返回`pre.next`是因为`cur`为引用值，所有`cur`变化，`pre`也就会发生变化，并且需要把`pre`的头部去掉

```js
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
```

