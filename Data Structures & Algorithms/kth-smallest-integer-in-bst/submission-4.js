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
     * @param {number} k
     * @return {number}
     */
    helper(current,k){
        if(!current) return
        let left=this.helper(current.left,k)
        if(left!=undefined) return left
        k[0]--
        if(!k[0]) return current.val
        let right=this.helper(current.right,k)
        if(right!=undefined) return right
    }
    kthSmallest(root, k) {
        const kArr=[k]
        return this.helper(root,kArr)
    }
}
