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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let queue=[root],level,res=[],len,current
        while(queue.length){
            level=-101
            len=queue.length
            for(let i=0;i<len;i++){
                current=queue.shift()
                if(current){
                    level=current.val
                    queue.push(current.left,current.right)
                }
            }
            if(level!==-101){
                res.push(level)
            }
        }
        return res
    }
}
