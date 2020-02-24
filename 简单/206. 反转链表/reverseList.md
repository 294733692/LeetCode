### 反转一个单链表。
示例:
```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

leetCode题目地址：[206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

解法1：迭代

思路：遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。

```js
let reverseList = function (head) {
  if (!head) return null
  let prev = null
  let curr = head
  while (curr) {
    // 记录当前节点的下一个节点
    let nextTemp = curr.next
    // 将当前节点的下一个节点指向一个节点存储
    curr.next = prev
    // prev节点和curr节点各前进一位
    prev = curr
    curr = nextTemp
  }
  return prev
};
```

解法2：递归

在使用递归的时候，一定要注意到出口问题。不然会出现无限循环

```js
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

```
