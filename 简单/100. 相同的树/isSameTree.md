### 给定两个二叉树，编写一个函数来检验它们是否相同。如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例1：

```
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```

示例2：

```
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```

示例2：

```
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```

LeetCode题目地址:[100. 相同的树](https://leetcode-cn.com/problems/same-tree/)

- 深度遍历优先
- 处理特殊情况
  - 两个树当前节点都为空，返回true
  - 两个树当前节点一个不为空，一个为空，返回false
  - 如果两个都不相等，且不相等的时候，返回false
  - 如果相同，继续递归left和right节点，继续上述步骤

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 深度遍历优先
let isSameTree = function (p, q) {
  if (!p && !q) { // 都为空
    return true
  } else if (!p || !q) { // 都不为空
    return false
  } else if (p.val != q.val) { // 不相等
    return false
  }
  // 递归处理比较左右树数的对比
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```



