给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

- 结点左子树中所含结点的值小于等于当前结点的值
- 结点右子树中所含结点的值大于等于当前结点的值
- 左子树和右子树都是二叉搜索树

例如：
给定 BST `[1,null,2,2]`,

```
   1
    \
     2
    /
   2
```

`返回[2]`.

**提示**：如果众数超过1个，不需考虑输出顺序

**进阶：**你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）



LeetCode题目地址：[501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)



解法1：中序遍历

这里需要注意，中序遍历是升序序列

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
 * @return {number[]}
 */
let findMode = function (root) {
  let maxCount = 0 // 记录数字出现的最大次数
  let currCount = 0 // 记录当前相同数字出现的次数
  let prev = null // 记录上一个根节点
  let set = new Set()

  let _helper = (node) => {
    if (!node) return
    // 遍历左子树
    _helper(node.left)
    // 上一个更节点存在并且val等于当前节点的val ? currCount + 1 : 不相等，currCount重新计数
    prev && prev.val === node.val ? currCount++ : currCount = 1
    // 如果当前记录的数字和当前记录最大的数字出现次数相同的的话，存放到set里面去
    if (currCount === maxCount) {
      set.add(node.val)
    } else if (currCount > maxCount) { // 如果当前记录的数字出现的次数大于当前记录的最大出现次数的话
      // 将maxCount更新为当前最大次数
      maxCount = currCount
      // 清空set集合
      set.clear()
      // 并向set添加出现的值
      set.add(node.val)
    }
    prev = node
    // 遍历右子树
    _helper(node.right)
  }

  _helper(root)
  return [...set]
};

```

