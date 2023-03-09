/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */


var connect = function(root) {
    //if root doesnt exists or root.left doesnt exits return root
    if (!root || !root.left) return root
    //the root.left.next will be root.right ||    root
    //                                         /       \
    //                                   root.left ->  root.right
    root.left.next = root.right;
    //if root.next exists then root.right.next will be root.next.left, else will be null
    //so if the node is at the right margin will be null, and if 
    root.right.next = root.next ? root.next.left : null;
    // do the same for the next nodes
    connect(root.left)
    connect(root.right)
    return root;
};