# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
      if not root:
        return 0
      diameter=[0]
      self.helper(root,diameter)
      return diameter[0]
    def helper(self,cur,diameter):
      if not cur:
        return 0
      left,right=self.helper(cur.left,diameter),self.helper(cur.right,diameter)
      diameter[0]=max(diameter[0],left+right)
      return 1+max(left,right)
      
