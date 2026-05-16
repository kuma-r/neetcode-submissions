class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    percolateUp(heap){
        let idx=heap.length-1
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2)
            if(heap[parentIdx]>heap[idx]){
               [heap[idx],heap[parentIdx]]=[heap[parentIdx],heap[idx]]
               idx=parentIdx
            }else break;
        }
    }
    percolateDown(heap){
        let idx=0
        while(true){
            let [children1,children2]=[2*idx+1,2*idx+2]
            if(children1>=heap.length && children2>=heap.length){
                return
            }
            let min=children1
            if(children2<heap.length && heap[children2]<heap[children1]){
                min=children2
            }
            if(heap[idx]>heap[min]){
                [heap[idx],heap[min]]=[heap[min],heap[idx]]
                idx=min
            }else{
                break
            }
        }
    }
    findKthLargest(nums, k) {
        let heap=[]
        for(let num of nums){
            if(heap.length<k){
                heap.push(num)
                this.percolateUp(heap)
            }else{
                if(heap[0]<num){
                    heap[0]=num
                    this.percolateDown(heap)
                }
            }
        }
        return heap[0]
    }
}
