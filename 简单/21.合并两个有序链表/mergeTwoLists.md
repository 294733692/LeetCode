### 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
示例：
```js
输入：[1, 2, 3] [1, 3, 4]
输出：[1, 1, 2, 3, 3, 4]
```
方法1：递归

- 对两个链表做merge操作，
- 链表表头较小的和剩下的链表做合并

算法：

- 处理边界情况，l1或l2为的时候（也是递归的出口），如果没有任何操作进行合并，那么我们需要返回一个非空链表。
- 判断`l1`和`l2`哪个表头值较大，然后递归添加下一个到结果（next）的值，如果两个链表都是空的，那么递归结束

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 处理特殊情况，递归出口
  // 递归到最后，如果两个链表都为空，返回结果
  if (!l1) return l2
  if (!l2) return l1
  // 如果l1链表的val小于l2链表的val，将在l1链表进行排序
  // 否则在l2链表进行排序
  if (l1.val < l2.val) {
    // 递归调用，l1链表进行排序，传入l2.next链表，继续和l2链表进行排序
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    // 同上
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};
```

方法2：迭代

- 假设`l1`比`l2`元素要少，我们将`l2`插入到`l1`的正确位置

算法：

- 设定一个`preHead`，方便最后返回合并后的链表
- 维护`cur`指针，我们需要调整它的`next`指针，
- 重复以上过程，直到`l1`或`l2`指向了`null`，
- 如果`l1`的当前位置的值小于等于`l2`，我们就把`l1`的值接在`cur`节点后面，同时将`l1`的指针向后移动一位，否则对`l2`做同样的操作

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
var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1)
  // 浅拷贝，cur的值会修改preHead的值
  let cur = preHead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // 将l1赋值给cur.next链表节点
      // l1剩下的链表赋值给自身（相当于删除循环前的链表值）
      cur.next = l1
      l1 = l1.next
    } else {
      // 同上
      cur.next = l2
      l2 = l2.next
    }
    // 删除当前循环的链表值
    cur = cur.next
  }
  // 循环完毕，返回不为空的链表结构
  cur.next = l1 || l2
  // 返回排序后的链表，这里用返回preHead.next
  // 返回preHead会把-1的链表给一起返回出来
  return preHead.next
}
```

