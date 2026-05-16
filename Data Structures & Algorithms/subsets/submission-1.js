class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    backtracking(nums,index,subset,result){
        if(index>=nums.length){
            result.push([...subset])
            return
        }
        subset.push(nums[index])
        this.backtracking(nums,index+1,subset,result)
        subset.pop()
        this.backtracking(nums,index+1,subset,result)
    }
    subsets(nums) {
        const subset=[],result=[]
        this.backtracking(nums,0,subset,result)
        return result
    }
}
