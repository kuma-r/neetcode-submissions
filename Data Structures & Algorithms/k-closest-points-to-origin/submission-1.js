class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    percolateUp(heap,distance){
        let idx=heap.length-1
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2)
            if(distance[heap[idx]]>distance[heap[parentIdx]]){
                [heap[idx],heap[parentIdx]]=[heap[parentIdx],heap[idx]]
                idx=parentIdx
            }else break;
        }
    }
    percolateDown(heap,distance){
        let idx=0
        while(true){
            let [children1,children2]=[2*idx+1,2*idx+2]
            if(children1>=heap.length && children2>=heap.length){
                return
            }
            let maximum=children1
            if(children2<heap.length && distance[heap[children2]] > distance[heap[children1]]){
                maximum=children1
            }
            if(distance[heap[idx]]<distance[heap[maximum]]){
                [distance[heap[idx]],distance[heap[maximum]]]=[distance[heap[maximum]],distance[heap[idx]]]
                idx=maximum
            }else{
                break
            }
        }     
    }
    kClosest(points, k) {
        let heap=[]
        let distance=[]
        for(let i=0;i<points.length;i++){
            distance[i]=Math.sqrt(Math.pow(points[i][0],2)+Math.pow(points[i][1],2))
        }
        for(let i=0;i<distance.length;i++){
            if(heap.length<k){
                heap.push(i)
                this.percolateUp(heap,distance)
            }else{
                if(distance[heap[0]]>distance[i]){
                    heap[0]=i
                    this.percolateDown(heap,distance)
                }
            }
        }
        let result=[]
        for(let i=0;i<heap.length;i++){
            result.push(points[heap[i]])
        }
        return result
    }
}
