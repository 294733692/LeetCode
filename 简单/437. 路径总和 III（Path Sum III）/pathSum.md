### 给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

**示例：**

```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```

解法1：单次递归

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
 * @return {number}
 */

// 1、遍历出每个路径
// 2、计算每个路径的值，判断和sum是否相等
let pathSum = function (root, sum) {
  let count = 0
  let data = []
  let _helper = function (root, sum, data) {
    if (!root) return
    data.push(root.val)
    let curr = 0
    for (let i = data.length - 1; i >= 0; i--) {
      curr += data[i]
      if (curr === sum) count++
    }
    _helper(root.left, sum, data)
    _helper(root.right, sum, data)
    data.pop()
  }
  _helper(root, sum, data, count)

  return count
};
let tree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: -2,
        left: null,
        right: null
      }
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: -3,
    left: null,
    right: {
      val: 11,
      left: null,
      right: null
    }
  }
}

console.log(pathSum(tree, 8));
```

