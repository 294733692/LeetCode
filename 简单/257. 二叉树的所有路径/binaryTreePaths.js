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

let binaryTreePaths1 = function (root) {
  let result = [];
  let path = [];
  let dfs = function (root) {
    if (root == null) return;
    path.push(root);
    dfs(root.left);
    dfs(root.right);
    console.log(path)
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
console.log(binaryTreePaths1(tree))
