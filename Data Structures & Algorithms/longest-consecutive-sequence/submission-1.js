class Solution {
    longestConsecutive(nums) {
        let maxSeq=0
        const seqSet = new Set(nums);
        nums.forEach((item)=>{
            if(!seqSet.has(item-1)){
               let currentSeq=1;
               while(seqSet.has(item+currentSeq)){
                currentSeq++
               }
               if(currentSeq>maxSeq){
                maxSeq=currentSeq
               }
            }
        })
        return maxSeq
    }
}
