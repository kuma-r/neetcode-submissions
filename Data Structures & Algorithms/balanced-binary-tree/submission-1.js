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
    isBalanced(root) {
        let result=true
        function height(root){
            if(!result || !root) return 0
            let leftHeight=height(root.left)
            let rightHeight=height(root.right)
            if(Math.abs(leftHeight-rightHeight)>1){
                result=false
            }
            return 1+Math.max(leftHeight,rightHeight)
        }

        height(root)
        return result
    }
}
