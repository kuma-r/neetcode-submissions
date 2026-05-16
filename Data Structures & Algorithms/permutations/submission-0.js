class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    helper(nums,current,result){
        if(!nums.length){
            result.push([...current])
            return
        }
        for(let i=0;i<nums.length;i++){
            current.push(nums[i])
            this.helper(nums.slice(0, i).concat(nums.slice(i + 1)),current,result)
            current.pop()
        }
    }
    permute(nums) {
        let current=[],result=[]
        this.helper(nums,current,result)
        return result
    }
}
