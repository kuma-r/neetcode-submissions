# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry=0
        dummy=ListNode()
        current=dummy
        while l1 or l2 or carry:
          acc=0
          if l1:
            acc+=l1.val
          if l2:
            acc+=l2.val
          acc+=carry
          digit = acc % 10
          carry = acc // 10   
          current.next=ListNode(digit)
          if l1:
            l1=l1.next
          if l2:
            l2=l2.next
          current=current.next
        return dummy.next
