### 计算给定二叉树的所有左叶子之和。

**示例：**

```
    3
   / \
  9  20
    /  \
   15   7
   
在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```

LeetCode题目地址：[404. 左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)


解法1：递归求值

```js
let sumOfLeftLeaves = function (root) {
  if (!root) return 0
  let {left, right} = root
  if (left && !left.left && !left.right) {
    return left.val + sumOfLeftLeaves(right)
  }

  return sumOfLeftLeaves(left) + sumOfLeftLeaves(right)
};
```

解法2：递归设置左子树为true

```js
let sumOfLeftLeaves1 = function (root) {
  let _helper = (root, sum, flag) => {
    if (!root) return sum
    if (root.left) sum = _helper(root.left, sum, true)
    if (root.right) sum = _helper(root.right, sum, false)
    if (!root.left && !root.right && flag) sum += root.val
    return sum
  }

  return _helper(root, 0, false)
}

let obj = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(sumOfLeftLeaves1(obj))
```
