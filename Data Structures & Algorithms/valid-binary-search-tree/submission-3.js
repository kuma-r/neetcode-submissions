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
     * @return {boolean}
     */
    isValid(current,left,right){
        if(!current) return true
        if(left>=current.val || current.val>=right) return false
        return (this.isValid(current.left,left,current.val) && this.isValid(current.right,current.val,right))
    }
    isValidBST(root) {
        return this.isValid(root,-1001,1001)
    }
}
