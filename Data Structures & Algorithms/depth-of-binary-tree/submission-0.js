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

    maxDepthHelper(current,depth){
        if(current==null){
            return depth
        }
        depth++
        return Math.max(depth,this.maxDepthHelper(current.left,depth),this.maxDepthHelper(current.right,depth))
    }
    maxDepth(root) {
        if(root==null){
            return 0
        }
        return this.maxDepthHelper(root,0)
    }
}
