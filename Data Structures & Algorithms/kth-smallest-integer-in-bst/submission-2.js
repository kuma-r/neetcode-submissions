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
    helper(current,arr,k){
        if(!current || arr.length>=k) return
        this.helper(current.left,arr,k)
        arr.push(current.val)
        this.helper(current.right,arr,k)
    }
    kthSmallest(root, k) {
        const arr=[]
        this.helper(root,arr,k)
        return arr[k-1]
    }
}
