给定一个链表，删除链表的倒数第 *n* 个节点，并且返回链表的头结点。

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**

给定的 *n* 保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？

leetCode题目地址：[19. 删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)



解法1：两次遍历

题目要求删除倒数的第几个节点，根据这个思路来，我们需要算出当前链表的的长度。即为删除列表从头开始的`Len - n + 1`个节点，

这里我们首先需要添加一个哑结点来处理特殊的情况：当链表只有一个节点或删除列表头部的时候。

在第一次遍历的时候我们找出列表的长度`Len`，并设置一个指向哑结点的指针，并移动它完成遍历，直到它到`Len - n`个节点的位置，这个时候我们把`len - n`个节点的`next`从新指向链接第`Len - n +2`个节点的位置，就ok了

```js
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
  // 删除节点
  first.next = first.next.next
  // 
  return pre.next
}

function ListNode (val) {
  this.val = val;
  this.next = null;
}
```



解法2：快慢指针（进阶）

快慢指针实际上就是对上一个解法的优化，这里我们采用两个指针，快指针从列表的`n + 1`的位置开始移动，慢指针从列表头部开始移动，这个时候，两个指针被`n`个节点分开，我们同时移动这两个指针向前，保持`n`个节点的距离，知道第一个指针指向最后一个节点，这个时候第二个指针指向从最后一个节点数起的第`n`个节点，我们从新链接第二个指针引用的节点的`next`指向该节点的下下个节点。

```js
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
```

