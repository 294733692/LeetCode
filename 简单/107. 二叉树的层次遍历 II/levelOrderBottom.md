### 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```
返回其自底向上的层次遍历为：
```
[
  [15,7],
  [9,20],
  [3]
]
```
LeetCode题目地址：[107. 二叉树的层次遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

解法1：递归

- 从顶部往下一层一层的迭代下来，
- 最后结果reverse一下

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
 * @return {number[][]}
 */
let levelOrderBottom = function (root) {
  if (!root) return []
  // 记录层级数组
  let result = []
  let _transOrder = (tree, level) => {
    if (tree !== null) {
      // 判断当前tree的层级数组是否有值
      // 有值，说明还在当前层级，则向数组里面添加当前节点值
      // 没有值，把当前节点的值，存放到当前result[level]的层级当中
      result[level] ? result[level].push(tree.val) : result[level] = [tree.val]
      _transOrder(tree.left, level+1)
      _transOrder(tree.right, level+1)
    }
  }
  //
  _transOrder(root, 0)
  // 因为节点是正向循环生成的，所以最后结果需要反向一下
  return result.reverse()
};
```

方法二：迭代

```
var levelOrderBottom1 = function(root) {
  //存放结果
  var arr=[];
  //临时的队列
  var queue=[];
  if(root){
    queue.push(root);
  }else{
    return [];
  }
  while(queue.length>0){
    //保存每层的值
    var leval=[];
    //队列长度
    var len=queue.length;
    for(var i=0;i<len;i++){
      //推出第一个节点值
      var node=queue.shift();
      //节点推进
      leval.push(node.val);
      //下一层节点推进queue
      if(node.left){
        queue.push(node.left);
      };
      if(node.right){
        queue.push(node.right);
      };
    };
    //每层结果推进arr
    arr.unshift(leval);
  }
  return arr;
};
```

