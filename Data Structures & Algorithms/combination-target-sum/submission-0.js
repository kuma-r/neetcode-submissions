class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    helper(nums,target,sum,current,result,index){
        if(target==sum){
            result.push([...current])
            return
        }
        if(target<sum || index>=nums.length){
            return
        }
        current.push(nums[index])
        this.helper(nums,target,sum+nums[index],current,result,index)
        current.pop()
        this.helper(nums,target,sum,current,result,index+1)
    }
    combinationSum(nums, target) {
        let current=[],result=[]
        this.helper(nums,target,0,current,result,0)
        return result
    }
}
