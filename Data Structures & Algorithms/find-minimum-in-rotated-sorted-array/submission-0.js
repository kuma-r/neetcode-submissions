class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length==1){
            return nums[0]
        }
        let L=0,R=nums.length-1,res=nums[0]
        while(L<=R){
            let mid=Math.floor((L+R)/2)
            if(nums[mid]>nums[nums.length-1]){
                L=mid+1
            }else{
                res=nums[mid]
                R=mid-1
            }
        }
        return res
    }
}
