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
        let occ=new Array(nums.length+1).fill(-1)
        for(const [key,value] of count.entries()){
            if(occ[value]!==-1){
                occ[value].push(key)
            }else occ[value]=[key]
        }
        console.log(occ)
        let result=[]
        for(let num=occ.length-1;num>=0;num--){
            if(k===0) break
            if(occ[num].length){
                result.push(...occ[num])
                k-=occ[num].length
            }
        }
        return result
    }
}
