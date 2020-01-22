### 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：

```
    3
   / \
  9  20
    /  \
   15   7
```

 返回它的最大深度 3 。 

LeetCode题目地址：[104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

方法1：递归

- 对比树的左右深度，如果求出左节点和有节点的最大值，
- 那边节点的值大，就继续想哪个节点的子节点下遍历

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  let leftDeepHeight = maxDepth(root.left)
  let rightDeepHeight = maxDepth(root.right)
  return Math.max(leftDeepHeight, rightDeepHeight) + 1
};
```

