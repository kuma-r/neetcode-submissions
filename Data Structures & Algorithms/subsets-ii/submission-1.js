class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const current=[],result=[]
        function backtrack(index){
            if(index===nums.length){
                result.push([...current])
                return
            }
            current.push(nums[index])
            backtrack(index+1)
            current.pop()
            index++
            while(index<nums.length && nums[index]===nums[index-1]){
                index++
            }
            backtrack(index)
        }
        nums=nums.sort((a,b)=>a-b)
        backtrack(0)
        return result
    }
}
