class Solution {
    longestConsecutive(nums) {
        let maxSeq=0
        const set=new Set()
        for(let num of nums){
            if(!set.has(num)){
                set.add(num)
                let temp=1
                while(set.has(num-1)){
                    temp++
                    num--
                }
                num=num+temp-1
                while(set.has(num+1)){
                     temp++
                    num++
                }
                maxSeq=Math.max(temp,maxSeq)
            }
        }
        return maxSeq
    }
}
