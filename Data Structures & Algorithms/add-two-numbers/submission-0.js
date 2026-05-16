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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let v1,v2,sum,result=new ListNode(),current=result,carry=0
        while(l1 || l2 || carry){
            v1=v2=0
            if(l1){
                v1=l1.val
                l1=l1.next
            }
            if(l2){
                v2=l2.val
                l2=l2.next
            }
            sum=v1+v2+carry
            if(sum>9){
                carry=Math.floor(sum/10)
                sum=sum%10
            }else{
                carry=0
            }
            current.next=new ListNode(sum,null)
            current=current.next
        }
        return result.next
    }
}
