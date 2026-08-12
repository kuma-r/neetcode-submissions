# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
      if not subRoot:
        return True
      return self.dfs(root,subRoot)

    def dfs(self,cur,subroot):
      if not cur and not subroot:
        return True
      if not cur or not subroot:
        return False
      if (cur.val==subroot.val and self.isSame(cur.left,subroot.left) and self.isSame(cur.right,subroot.right)):
        return True
      return (self.dfs(cur.left,subroot) or self.dfs(cur.right,subroot))

    def isSame(self,root,subroot):
      if not root and not subroot:
        return True
      if not root or not subroot:
        return False
      return (root.val==subroot.val and self.isSame(root.left,subroot.left) and self.isSame(root.right,subroot.right))