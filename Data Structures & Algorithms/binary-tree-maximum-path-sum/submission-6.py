# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
      maxi=[root.val]
      self.helper(root,maxi)
      return maxi[0]
    def helper(self,cur,maxi):
      if not cur:
        return 0
      left,right=self.helper(cur.left,maxi),self.helper(cur.right,maxi)
      resOne=cur.val+max(left,right)
      resBoth=cur.val+left+right
      maxi[0]=max(maxi[0],resOne,resBoth)
      return max(0,resOne)