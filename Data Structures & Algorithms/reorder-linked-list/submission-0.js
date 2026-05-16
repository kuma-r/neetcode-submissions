/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow=head,fast=head.next,second,temp,previous=null,first,temp2
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        second=slow.next
        slow.next=null
        while(second){
            temp=second.next
            second.next=previous
            previous=second
            second=temp
        }
        first=head,second=previous
        while(second){
            temp=first.next
            temp2=second.next
            first.next=second
            second.next=temp
            first=temp
            second=temp2
        }

        return head
    }
}
