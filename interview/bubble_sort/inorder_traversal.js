// 前序：根节点排最先，然后同级先左后右
// 中序：先左后根最后右
// 后序：先左后右最后根


//      1
// null    2
//      3
// 满二叉树 2^n-1个结点
// 中序遍历 一棵大树 递归的概念

//           root
//     left      right

// left1  right1
// 中序遍历 左子树 根结点 右子树

    //           1
    //     2           3
    // 4       5    6      7





function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.right = a2;
a2.left = a3;


var inorderTraversal = function(root) {
  let arr = [];
  const inorder = root => {
    if (root === null) return null;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return arr;
}

console.log(inorderTraversal(a1));