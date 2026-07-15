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
        while l1 and l2:
          acc=l1.val+l2.val+carry
          digit = acc % 10
          carry = acc // 10   
          current.next=ListNode(digit)
          l1=l1.next
          l2=l2.next
          current=current.next
        temp=None
        if l1:
          temp=l1
        elif l2:
          temp=l2
        while temp:
          acc=temp.val+carry
          digit = acc % 10
          carry = acc // 10   
          current.next=ListNode(digit)
          temp=temp.next
          current=current.next
        if carry:
          current.next=ListNode(carry)
        return dummy.next
