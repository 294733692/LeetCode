给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

**示例:**

```
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

LeetCode题目地址:[24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

解法1：常规解法（非递归）

这种解法就是简单的对每个节点的值进行交换，需要注意的是，这里需要采用两个临时节点来存储两个需要交换的节点。

```js
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
```

解法2：递归

在使用递归的时候，需要注意的条件是

- 递归条件的出口，这个是必须的，如果没有出口，递归会一直持续下去，不会停止
- 中间的处理过程的逻辑是一样的。

比较出名的递归就是[斐波那契数列](https://baike.baidu.com/item/斐波那契数列/99145?fr=aladdin)。

回到这一道题：

- 从`head`开始递归
- 每次递归复杂交换一对节点，`pre`设置为哨兵节点，来负责两个交换的节点。
- 下次递归传递下次需要进行交换的节点。如果链表中还有节点，那么进行递归
- 交换两个节点后，需要返回`pre.next`，因为这是交换后的新表头
- 在所有递归结束的时候，我们需要返回`pre`,也就是交换后的头部。

```js
let swapPairs = function (head) {
  if (head === null || head.next === null) return head
  let pre = {}

  pre = head.next
  head.next = swapPairs(pre.next)
  pre.next = head
  return pre
};
```

