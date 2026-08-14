# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
      kth,result=[k],[None]
      self.dfs(root,kth,result)
      return result[0]
    def dfs(self,cur,k,result):
      if result[0] or not cur:
        return
      self.dfs(cur.left,k,result)
      if k[0]==1:
        result[0]=cur.val
      k[0]-=1
      self.dfs(cur.right,k,result)
      