class Solution {
    longestConsecutive(nums) {
        let seqSet = new Set()
        let maxSeq=0
        nums.forEach((item)=>{
            seqSet.add(item)
        })
        nums.forEach((item)=>{
            if(!seqSet.has(item-1)){
               let currentSeq=1;
               let num=item
               while(seqSet.has(num+1)){
                currentSeq++
                num++
               }
               if(currentSeq>maxSeq){
                maxSeq=currentSeq
               }
            }
        })
        return maxSeq
    }
}
