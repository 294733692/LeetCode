### 翻转一棵二叉树。

**示例：**

输入

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

#### [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

```js
var invertTree = function(root) {
  // 递归出口
  if (!root) return null
	
  // 找出左右值  
  let right = invertTree(root.right)
  let left = invertTree(root.left)
  // 左右值替换
  root.left = right
  root.right = left

  return root
};

```

