class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count=new Map()
        for(const num of nums){
            count.set(num,(count.get(num)||0)+1)
        }
        let occ=new Array(nums.length+1).fill(null)
        for(const [key,value] of count.entries()){
            if(!occ[value]) occ[value]=[]
            occ[value].push(key)
        }
        let result=[]
        for(let num=occ.length-1;num>=0;num--){
            if(k===0) break
            if(occ[num]){
                result.push(...occ[num])
                k-=occ[num].length
            }
        }
        return result
    }
}
