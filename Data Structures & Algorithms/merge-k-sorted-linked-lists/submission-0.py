# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        while len(lists)>1:
          mergedList=[]
          for i in range(0,len(lists),2):
            mergedList.append(self.mergeList(lists[i],lists[i+1] if i+1<len(lists) else None))
          lists=mergedList
        return lists[0] if lists else None
    def mergeList(self,list1,list2):
      if not list1:
        return list2
      if not list2:
        return list1
      dummy=ListNode()
      current=dummy
      while list1 and list2:
        if list1.val<=list2.val:
          current.next=list1
          list1=list1.next
        else:
          current.next=list2
          list2=list2.next
        current=current.next
      if list1:
        current.next=list1
      elif list2:
        current.next=list2
      return dummy.next