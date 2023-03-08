/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var mergeTrees = function (root1, root2) {
    //check if the first node is missing
    if (!root1) {
        return root2;
    }
    //check if the second node is missing
    if (!root2) {
        return root1;
    }
    //if noth nodes exists. sum the values
    root1.val += root2.val;

    //do the same thing for the left node and the right node
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)

    //return the merged t1
    return root1
};