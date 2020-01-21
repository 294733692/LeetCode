### 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 `[1,2,2,3,4,4,3]` 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

 但是下面这个 `[1,2,2,null,3,null,3]` 则不是镜像对称的: 

```
    1
   / \
  2   2
   \   \
   3    3
```

leetCode题目地址：[101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

方法1：递归处理

根据题目意思，判断是否对称，我们可以看到第一个例子，如果当前树是对称的，那么必然树的left和树的right的值是相等的，因为树的每一层结构都是相等的，都分为左分支和右分支，那么我们就可以递归对左分支的值和右分支的值做对比。

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
let isSymmetric = function (root) {
  // 辅助函数，对比数左右两边值是否相等
  let _isMirror = (leftTree, rightTree) => {
    // 特殊情况，如果树的左右都为空，说明相等
    if (!leftTree && !rightTree) return true
    // 如果树的左右有一边为空，说明不相等
    if (!leftTree || !rightTree) return false
    // 先对比树的左右是否相等，如果相等，递归传入树的左边的值和右边的值做对比
    // 重复上述过程
    return (leftTree.val === rightTree.val)
      && _isMirror(leftTree.left, rightTree.right)
      && _isMirror(leftTree.right, rightTree.left)
  }

  return _isMirror(root, root)
};


```

