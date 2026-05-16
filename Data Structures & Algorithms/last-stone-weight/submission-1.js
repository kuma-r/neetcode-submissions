class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    heapify(heap,stones){
        for(const stone of stones){
            heap.push(stone)
            this.percolateUp(heap)
        }
    }
    percolateUp(heap){
        let idx=heap.length-1
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2)
            if(heap[parentIdx]<heap[idx]){
                [heap[idx],heap[parentIdx]]=[heap[parentIdx],heap[idx]]
                idx=parentIdx
            }else{
                break
            }
        }
    }
    heapPop(heap){
                if (heap.length === 1) return heap.pop();

        let max=heap[0]
        heap[0]=heap.pop()
        let idx=0
        while(true){
            let [children1,children2]=[(idx*2)+1,(idx*2)+2]
            let largest = idx;
            if (children1 < heap.length && heap[children1] > heap[largest]) {
                largest = children1;
            }
            if (children2 < heap.length && heap[children2] > heap[largest]) {
                largest = children2;
            }  
            if(heap[largest]>heap[idx]){
                [heap[largest],heap[idx]]=[heap[idx],heap[largest]]
                idx=largest
            }else{
                break
            }
        }
        return max
    }

    lastStoneWeight(stones) {
        let heap=[]
        this.heapify(heap,stones)
        while(heap.length>1){
            let max1=this.heapPop(heap)
            let max2=this.heapPop(heap)
            let smash=Math.abs(max1-max2)
            if(smash){
                heap.push(smash)
                this.percolateUp(heap)
            }
        }
        heap.push(0)
        return heap[0]
    }
}
