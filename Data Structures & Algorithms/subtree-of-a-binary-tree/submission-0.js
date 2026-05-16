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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    compareTrees(p,q){
        if(!p && !q) return true
        if(!p || !q || p.val!==q.val) return false
        return (this.compareTrees(p.left,q.left) && this.compareTrees(p.right,q.right))
    }
    isSubtree(root, subRoot) {
        if(!root && !subRoot) return true
        let current=root,same=false,queue=[]

        while(current || queue.length){
            if(!current){
                current=queue.pop()
                if(!current){
                    continue
                }
            }
            if(current.val==subRoot.val){
                same=same || this.compareTrees(current,subRoot)
            }
            queue.push(current.right)
            current=current.left
        }
        return same
    }
}
