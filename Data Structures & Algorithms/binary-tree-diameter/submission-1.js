/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root){
            return 0
        }
        let result=0
        function height(root){
            if(!root){
                return 0
            }
            let leftMax=height(root.left)
            let rightMax=height(root.right)
            result=Math.max(result,leftMax+rightMax)
            return 1+Math.max(leftMax,rightMax)
        }
        height(root)
        return result
    }
}
