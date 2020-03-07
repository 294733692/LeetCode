### 257. 二叉树的所有路径

给定一个二叉树，返回所有从根节点到叶子节点的路径。

**说明:** 叶子节点是指没有子节点的节点。

**示例:**

```
输入:

   1
 /   \
2     3
 \
  5
  
  输出: ["1->2->5", "1->3"]
  解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
```

LeetCode题目地址：[257. 二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/)

解法1：递归

在递归遍历二叉树的时候，需要考虑的是当前节点和它的子节点，如果当前节点不是叶子节点的时候，那么在当前路径`Path`末尾添加该节点，并递归该节点的子节点。如果当前节点是叶子节点，则在当前路径`path`末尾添加该节点。就得到了一条从根节点到子节点的路径。可以把路径添加到答案中去。



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
 * @return {string[]}
 */
let binaryTreePaths = function (root) {
  // 递归出口
  if (!root) return []
  let res = []
  // 记录走过的集合
  // 这里备注一下 ，为什么要使用模板字符串
  // 当树只有根节点的时候，里面的数，没有被转化为字符串，测试通不过
  let curPath = `${root.val}`
  let _helper = (root, curPath) => {
    if (!root.left && !root.right) {
      res.push(curPath)
    }
    if (root.left) {
      _helper(root.left, curPath + '->' + root.left.val)
    }
    if (root.right) {
      _helper(root.right, curPath + '->' + root.right.val)
    }
  }

  _helper(root, curPath)
  return res
};
```



解法2：优化递归

```js
let binaryTreePaths1 = function (root) {
  let result = [];
  let path = [];
  let dfs = function (root) {
    if (root == null) return;
    path.push(root);
    dfs(root.left);
    dfs(root.right);
    if (!root.left && !root.right) {
      result.push(path.map(item => item.val).join('->'));
    }
    path.pop();
  }
  dfs(root);
  return result;
}

let tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
```

