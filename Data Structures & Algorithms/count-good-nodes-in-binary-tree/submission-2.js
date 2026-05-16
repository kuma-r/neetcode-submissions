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
    helper(current,max,result){
        if(!current) return 
        if(current.val>=max){
            max=current.val
            result[0]++
        }
        this.helper(current.left,max,result)
        this.helper(current.right,max,result)
    }
    goodNodes(root) {
        if(!root) return 0
        const result=[0]
        this.helper(root,-100,result)
        return result[0]
    }
}
