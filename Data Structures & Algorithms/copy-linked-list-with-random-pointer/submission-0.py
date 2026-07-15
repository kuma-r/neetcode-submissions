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
        l1=head
        while l1:
          current.next=Node(l1.val)
          current=current.next
          l1=l1.next
        l1,current=head,dummy.next
        while l1:
          l1temp,l2temp=head,dummy.next
          while l1.random!=l1temp:
            l1temp=l1temp.next
            l2temp=l2temp.next
          current.random=l2temp
          l1=l1.next
          current=current.next
        return dummy.next