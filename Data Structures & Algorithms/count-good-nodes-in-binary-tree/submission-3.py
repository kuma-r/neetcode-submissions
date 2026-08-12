# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
      result=[0]
      self.helper(root,root.val,result)
      return result[0]

    def helper(self,cur,great,result):
      if cur:
        if cur.val>=great:
          result[0]+=1
          great=cur.val
        self.helper(cur.left,great,result)
        self.helper(cur.right,great,result)