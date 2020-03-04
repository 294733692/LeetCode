### 235. 二叉搜索树的最近公共祖先

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。"

例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5]

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/binarysearchtree_improved.png)

**示例 1:**

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```

**示例 2:**

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```

**说明:**

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉搜索树中。



### 二叉搜索树定义

这样一棵树可以使用一个链表结构表示，其中每个结点就是一个对象。除了结点中的关键字外，每个结点还包含属性left、right、pleft、right、pleft、right、p，它们分别指向结点的左孩子、右孩子和双亲。如果某个孩子结点和父结点不存在，则相应属性的值为null。根结点是树中唯一父结点为null的结点。

二叉搜索树有以下三个特性：

- 左子树上所有节点的值都**小于或等于**它根节点的值
- 右子树上所有节点的值都**大于或等于**它根节点的值
- 左、右、子树也分别为二叉搜索树

利用这个特性：那么就可以进行递归处理

解法1：递归

算法思想：

- 从根节点遍历二叉树
- 如果`p`和`q`节点都在右子树上，那么以右子树为根节点进行递归操作（情况1）
- 如果`p`和`q`节点都在左子树上，那么以左子树为根节点进行递归操作（情况2）
- 如果不满足上面两种情况，那么说明我们已经找到了`p`和`q`节点的公共祖先节点（情况3）

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
  // 当前节点的父节点val值
  let parentVal = root.val
  // p节点的val值
  let pVal = p.val
  // q节点的val值
  let qVal = q.val

  if (qVal > parentVal && pVal > parentVal) {
    // 如果q节点的val值和p节点的val值都大于当前节点的父节点val值
    // 满足上面说的第二个特性，所有判断公共祖先节点在右边（即情况1）
    return lowestCommonAncestor(root.right, p, q)
  } else if (pVal < parentVal && qVal < parentVal) {
    // 如果q节点val值和p节点val值，都小于当前节点父节点val值
    // 满足上面说的第一个特性，所以判断公共祖先节点在左边（即情况2）
    return lowestCommonAncestor(root.left, p, q)
  } else {
    //  如果上面两个条件都不满足，那么就说明，我们找到了分离节点，即找到了最近的公共祖先（LCP）
    return root
  }
};
```

解法2：迭代

解法2和解法1基本相似，只是简单的把返回值，给提前给提取出来了。

```js
let lowestCommonAncestor1 = function (root, p, q) {
  let node = root

  while (node) {
    let parentVal = node.val

    if (p.val > parentVal && q.val > parentVal) {
      node = node.right
    } else if (p.val < parentVal && q.val < parentVal) {
      node = node.left
    } else {
      return node
    }
  }
  return null
}
```

