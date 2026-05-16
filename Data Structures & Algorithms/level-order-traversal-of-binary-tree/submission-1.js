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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result=[]
        if(!root){
            return result
        }
        let queue=[root]
        while(queue.length){
            let len=queue.length
            let level=[]
            for(let i=0;i<len;i++){
                let current=queue.shift()
                level.push(current.val)
                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
            }
            result.push(level)
        }
        return result
    }
}
