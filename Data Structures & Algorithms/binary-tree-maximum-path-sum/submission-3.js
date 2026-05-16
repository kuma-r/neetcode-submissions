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
    helper(current,max){
        if(!current) return 0
        let left=this.helper(current.left,max)
        let right=this.helper(current.right,max)
        let sum= current.val+Math.max(0,left)+Math.max(0,right)
        max[0]=Math.max(max[0],sum)
        return Math.max(0,left,right)+current.val
    }
    maxPathSum(root) {
        let max=[-1001]
        this.helper(root,max)
        return max[0]
    }
}
