class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    sum1(nums){
        let result=0
        for(let i=0;i<nums.length;i++){
            result+=nums[i]
        }
        return result
    }
    helper(nums,target,current,result,i){
        if(i>=nums.length) return
        let sum=this.sum1(current)
        if(sum==target){
            result.push([...current])
            return
        }
        if(sum>target) return

        current.push(nums[i])
        this.helper(nums,target,current,result,i)
        current.pop()
        this.helper(nums,target,current,result,i+1)
    }
    combinationSum(nums, target) {
        const result=[],current=[]
        this.helper(nums,target,current,result,0)
        return result
    }
}
