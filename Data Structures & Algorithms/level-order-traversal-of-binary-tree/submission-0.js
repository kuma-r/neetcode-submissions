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
        if(!root) return []
        let res=[],queue=[root],len=0,levelRes=[],current
        while(queue.length){
            levelRes=[]
            len=queue.length
            for(let i=0;i<len;i++){
                current=queue.shift()
                if(current){
                    levelRes.push(current.val)
                    queue.push(current.left,current.right)
                }
            }
            if(levelRes.length){
                res.push(levelRes)
            }
        }
        return res
    }
}
