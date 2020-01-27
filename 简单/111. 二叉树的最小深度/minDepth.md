### 给定一个二叉树，找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。
示例:

给定二叉树 [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最小深度  2.

LeetCode题目地址：[111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

如果做过104题（二叉树的最大深度）的话这道题解法基本类式。

按照求最大深度的方式来求，会出现这么一个问题。当左右子节点为空的时候，返回最小深度不对例如`[1, 2]`

解法1：递归

- 处理情况
  - 情况1：root为null的时候，返回0
  - 情况2：左子节点或右子节点都为为null的时候，返回1
  - 情况3：左右子节点有一方为null的时候，返回不为null的孩子子节点深度
  - 情况4：左右子节点都不为null的时候，返回左右孩子最小深度的子节点值
- 求出左节点最小值
- 求出右节点最小值
- 左右节点比较最小值并返回+1

```js
let minDepth = function(root) {
  // 处理情况1
  if (!root) return 0
  // 处理情况2
  if (!root.left && !root.right) return 1
  let minLeft = minDepth(root.left)
  let minRight = minDepth(root.right)
  // 情况3
  if (!root.left || !root.right) return minLeft + minRight + 1
  // 情况4
  return Math(minLeft, minRight) + 1  
};
```

优化版本

```js
let minDepth = function(root) {
  if (!root) return 0
  let minLeft = minDepth(root.left)
  let minRight = minDepth(root.right)

  return (!root.left || !root.right) ? minLeft + minRight + 1 : Math.min(minLeft, minRight) + 1
};

```

