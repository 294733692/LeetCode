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
