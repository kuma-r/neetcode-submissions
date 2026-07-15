# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy=ListNode(0,head)
        L,R=dummy,head
        while n:
          n-=1
          R=R.next
        while R:
          R=R.next
          L=L.next
        L.next=L.next.next
        return dummy.next