class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    helper(nums,current,result,index){
        if(index>=nums.length){
            console.log(current)
            result.push([...current])
            return
        }
        this.helper(nums,current,result,index+1)
        current.push(nums[index])
        this.helper(nums,current,result,index+1)
        current.pop();
    }
    subsets(nums) {
        let result=[]
        let current=[]
        this.helper(nums,current,result,0)
        return result
    }
}
