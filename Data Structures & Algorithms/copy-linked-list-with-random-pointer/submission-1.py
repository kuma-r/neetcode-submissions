"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        dummy=Node(0)
        current=dummy
        nodeMap={} 
        l1=head
        while l1:
          newNode=Node(l1.val)
          current.next=newNode
          current=current.next
          nodeMap[l1]=newNode
          l1=l1.next
        l1,current=head,dummy.next
        while l1:
          if l1.random:
            current.random=nodeMap[l1.random]
          l1=l1.next
          current=current.next
        return dummy.next