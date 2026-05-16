class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    helper(nums,index,current,result){
        if(index>=nums.length){
            result.push([...current])
            return
        }
        current.push(nums[index])
        this.helper(nums,index+1,current,result)
        current.pop()
        index++
        while(index<nums.length && nums[index-1]==nums[index]) {
            index++
        }     
        this.helper(nums,index,current,result)  
    }
    subsetsWithDup(nums) {
        let current=[],result=[]
        nums=nums.sort((a,b)=>a-b)
        this.helper(nums,0,current,result)
        return result
    }
}
