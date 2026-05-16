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
    dfs(current){
        if(current==null){
            return [true,0]
        }
        let left,right
        left=this.dfs(current.left)
        right=this.dfs(current.right)
        if(left[0] && right[0] && Math.abs(right[1]-left[1])<=1){
            return [true,1+Math.max(left[1],right[1])]
        }
        return [false,0]
    }
    isBalanced(root) {
        return this.dfs(root)[0]
    }
}
