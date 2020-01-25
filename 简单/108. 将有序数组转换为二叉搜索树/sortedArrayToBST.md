### 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树

 本题中，一个高度平衡二叉树是指一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过 1。 

示例：

```
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```

LeetCode题目地址：[108. 将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

解法1：迭代

从上个例子上可以看出，高度平衡二叉搜索树是以中位数生成的根节点，中位数左边为left子节点，右边是right子节点。没有的子节点我们就返回null即可。

- 找出给定数组的中位数，以中位数生成树
- 找出左边树，并生成
- 右边同上

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function (nums) {
  // 处理特殊情况
  if (!nums) return null

  let _helper = (root, start, end) => {
    if (start < end) {
      // 找出中位数，类似于parseInt((start + end) / 2)
      let mid = (start + end) >>> 1
      // 生成以档中位数为起始节点的树
      let node = new TreeNode(nums[mid])
      // 迭代处理左子节点、右子节点情况
      node.left = _helper(root, start, mid)
      node.right = _helper(root, mid + 1, end)
      return node
    } else {
      return null
    }
  }
  return _helper(nums, 0, nums.length)
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

```

[](/**

 * Definition for a binary tree node.

 * function TreeNode(val) {

 *     this.val = val;

 *     this.left = this.right = null;

 * }

 */

/**

 * @param {number[]} nums

 * @return {TreeNode}

 */

let sortedArrayToBST = function (nums) {

  // 处理特殊情况

  if (!nums) return null


  let _helper = (root, start, end) => {

​    if (start < end) {

​      // 找出中位数，类似于parseInt((start + end) / 2)

​      let mid = (start + end) >>> 1

​      // 生成以档中位数为起始节点的树

​      let node = new TreeNode(nums[mid])

​      // 迭代处理左子节点、右子节点情况

​      node.left = _helper(root, start, mid)

​      node.right = _helper(root, mid + 1, end)

​      return node

​    } else {

​      return null

​    }

  }

  return _helper(nums, 0, nums.length)

};


function TreeNode(val) {

  this.val = val;

  this.left = this.right = null;

}


console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

)
