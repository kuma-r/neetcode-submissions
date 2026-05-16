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
     * @return {TreeNode}
     */

    
    invertTree(root) {
        // let current=root,temp
        // while(current.left!==null || current.right!==null){
        //     temp=current.left
        //     current.left=current.right
        //     current.right=temp
        // }

        if(root==null){
            return root
        }
        let current=root,temp
        if(current.left!==null || current.right!==null){
            temp=current.left
            current.left=current.right
            current.right=temp
            this.invertTree(current.left)
            this.invertTree(current.right)
        }
        return root
    }
}
