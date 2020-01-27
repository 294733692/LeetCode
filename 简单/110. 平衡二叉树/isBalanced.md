### 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一个高度平衡二叉树定义为：

> 一个二叉树每个节点的左右两个子树的高度差绝对值不超过1.

示例1：

给定二叉树 `[3, 9, 20, null, null, 15, 7]`

```
  3
   / \
  9  20
    /  \
   15   7
```

返回 `true` 。

**示例 2:**

给定二叉树 `[1,2,2,3,3,null,null,4,4]`

```
      1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

 返回 `false` 。 
 
 LeetCode题目地址:[110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

算法1：提前阻断法（从底向上）

- 对二叉树做深度优先遍历
  - 边界条件：当子节点为null的时候，返回高度为`0`
  - 返回值：
    - 从低向上，遍历后返回当前以`root`为根节点的子树的最大高度
    - 如果`左右子树高度差大于1`，说明不是平衡二叉树，直接返回`-1`
  - 如果发现不是平很二叉树，那么后面的高度计算都是没有意义的，所以直接返回`-1`，避免后面的计算

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
 * @return {boolean}
 */
let isBalanced = function (root) {
  let _depth = (root) => {
    // 当前层数不存在，那么层数为0
    if (root === null) return 0
    // 获取左节点的层数
    let left = _depth(root.left)
    // 判断左节点的层数，如果层数为-1，直接截断
    if (left === -1) return -1
    let right = _depth(root.right)
    if (right === -1) return -1
    // 如果左右节点的层数相差小于2，那么直接返回真实层数，每次递归层层数+1，否则返回-1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }
  // 判断存在的层数相差是否大1
  return _depth(root) !== -1
};

```

