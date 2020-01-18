### 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例1：
```
输入: 1->1->2
输出: 1->2
```
示例2：
```
输入: 1->1->2->3->3
输出: 1->2->3
```
LeetCode题目地址：[83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

本题比较简单，根据题目意思来，给定一个有序的链表，所以我们只需要比较当前链表的val和和next下val值就可以了，如果当前链表和next的val值相同。就把当前链表的next替换成当前链表的.next.next即可，如果不相同把当前链表替换成当前链表的next就可以了。

```js
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
var deleteDuplicates = function(head) {
// current和head指向的是同一个地址，current用来操作列表，去除重复的。最后返回列表的最开始的地址，即头部head
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
```

