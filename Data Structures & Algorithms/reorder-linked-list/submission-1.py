# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow,fast=head,head.next
        while fast and fast.next:
          slow=slow.next
          fast=fast.next.next
        l2=slow.next
        slow.next=None
        l1=head
        current=l2
        previous=None
        while current:
          temp=current.next
          current.next=previous
          previous=current
          current=temp
        l2=previous
        count=0
        while l2:
          temp=l1.next
          temp2=l2.next
          l1.next=l2
          l2.next=temp
          l1=temp
          l2=temp2