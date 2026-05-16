/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let result=null,head=null
        if(list1===null){
            return list2
        }
        if(list2===null){
            return list1
        }
        if(list1.val<=list2.val){
            result=list1
            list1=list1.next
        }else{
            result=list2
            list2=list2.next
        }
        head=result
        while(list1!==null && list2!==null){
            if(list1.val<=list2.val){
                result.next=list1
                list1=list1.next
                result=result.next
            }else{
                result.next=list2
                list2=list2.next
                result=result.next
            }
        }
        if(list1==null){
            result.next=list2
        }else{
            result.next=list1
        }
        return head
    }
}
