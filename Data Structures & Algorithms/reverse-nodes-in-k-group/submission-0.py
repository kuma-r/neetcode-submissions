# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        head,tail,new=self.reverseLinkedList(head,k)
        self.printLinkedList(head)
        self.printLinkedList(tail)
        self.printLinkedList(new)
        while new and tail:
          tail.next,tail,new=self.reverseLinkedList(new,k)
        return head

    def reverseLinkedList(self,head,k):
      seglen=0
      current=head
      prev=None
      while current:
        prev=current
        current=current.next
        seglen+=1
      if seglen<k:
        return head,None,prev
      seglen=0
      previous=None
      current=head
      while seglen!=k:
        seglen+=1
        temp=current.next
        current.next=previous
        previous=current
        current=temp
      return previous,head,current
    def printLinkedList(self,head):
      temp=[]
      current=head
      while current:
        temp.append(current.val)
        current=current.next
      print(temp)