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

    dfs(node,res,k){
        if(!node) return
        if(res.length>=k) return
        this.dfs(node.left,res,k)
        res.push(node.val)
        this.dfs(node.right,res,k)
    }
    kthSmallest(root, k) {
        let res=[]
        this.dfs(root,res,k)
        return res[k-1]
    }
}
