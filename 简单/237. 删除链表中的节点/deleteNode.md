### 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

现有一个链表 -- head = [4,5,1,9]，它可以表示为:

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png)

**示例 1:**

```
输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2:**

```
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

**说明:**

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。

- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
- 不要从你的函数中返回任何结果。



LeetCode题目地址：[237. 删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)



第一眼看这道题目，在看到函数，这是什么神仙题目，head哪里去了？怎么只有一个node参数。去看了下大神的评论，在仔细研究了下题目，我理解就是：写一个方法，删除当前的节点。



思路：

​		第一想法就是删除当前节点的值，将下一个节点的值拼接到上一个节点，但是有一个问题，怎么去获取到上一个节点的值，一直没有想到方法；

​		后面换了一个想法：既然获取不到上一个节点的值，那么为什么不能用要删除的节点的下一个节点，去替换要删除的节点，这样不就删除了吗

​		需要注意的是。题目给了一个非常重要的信息，`非尾节点`

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let deleteNode = function (node) {
  // 当前节点的值替换成下一个节点的值  
  node.val = node.next.val
  // 当前节点的值next，指向下下节点的next  
  node.next = node.next.next
};
```

