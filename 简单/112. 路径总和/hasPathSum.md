### 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

 **说明:** 叶子节点是指没有子节点的节点。 

 **示例:** 
给定如下二叉树，以及目标和 `sum = 22`， 

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

 返回 `true`, 因为存在目标和为 22 的根节点到叶子节点的路径 `5->4->11->2`。 

LeetCode题目地址：[112. 路径总和](https://leetcode-cn.com/problems/path-sum/)

方法1：递归

最简单的方法就是使用递归，遍历整个树；对于tree的每个子节点进行调用函数进行递归处理。

其中目前值`sum`减去当前子节点的`val`值；如果当前子节点不存在下一个子节点，判断sum是否等于0，如果是，就是直接返回。

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
 * @param {number} sum
 * @return {boolean}
 */
let hasPathSum = function (root, sum) {
  // 处理特殊情况
  if (!root) return false
  // 每次递归减去tree的val，最后判断子节点为空，判断最后的sum是否为0
  sum -= root.val
  if (!root.left && !root.right) return sum === 0
  // 递归判断左右子节点的节点值值和是否等于sum
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};

```



