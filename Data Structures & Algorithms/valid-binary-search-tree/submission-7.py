# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
      return self.dfs(root,-1000000001,1000000001)
    def dfs(self,cur,minValue,maxValue):
      if not cur:
        return True
      if cur.val>minValue and cur.val<maxValue:
        return (self.dfs(cur.left,minValue,cur.val) and self.dfs(cur.right,cur.val,maxValue))
      return False