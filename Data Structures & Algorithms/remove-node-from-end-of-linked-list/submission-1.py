# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        length=0
        current=head
        while current:
          length+=1
          current=current.next
        count=0
        dummy=ListNode()
        dummy.next=head
        current=dummy
        while count!=length-n:
          count+=1
          current=current.next
        print(current.val)
        current.next=current.next.next
        return dummy.next