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

    dfs(node,res){
        if(!node) return
        this.dfs(node.left,res)
        res.push(node.val)
        this.dfs(node.right,res)
    }
    kthSmallest(root, k) {
        let res=[]
        this.dfs(root,res)
        return res[k-1]
    }
}
