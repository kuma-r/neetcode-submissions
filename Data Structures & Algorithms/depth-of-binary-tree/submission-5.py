# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
      if not root:
        return 0
      level=0
      stack=[[root,1]]
      while len(stack):
        cur=stack.pop()
        level=max(level,cur[1])
        if cur[0].right:
          stack.append([cur[0].right,cur[1]+1])
        if cur[0].left:
          stack.append([cur[0].left,cur[1]+1])
      return level
        