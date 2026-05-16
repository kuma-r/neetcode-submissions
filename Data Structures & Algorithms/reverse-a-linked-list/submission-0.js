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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head==null){
            return head
        }
        let previous=null,current=head
        while(current.next){
            let temp=current.next
            current.next=previous
            previous=current
            current=temp
        }
        current.next=previous
        return current
    }
}
