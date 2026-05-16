class Solution {
    longestConsecutive(nums) {
        let maxSeq=0
        const set=new Set()
        for(const num of nums){
            set.add(num)
        }
        let values=set.values()
        for(let item of values){
            if(!set.has(item-1)){
                let temp=0
                while(set.has(item)){
                    set.delete(item)
                     item++
                     temp++
                }
                maxSeq=Math.max(maxSeq,temp)
            }
        }
        return maxSeq
    }
}
